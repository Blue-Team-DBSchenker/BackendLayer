import { Controller, Post, Body, Headers } from "@nestjs/common";
import { CreateDocumentDto } from "./create.document.dto";
import { generateKeysFromCredentials } from "utils/keyPairFromCredentials";
import { BlockchainClient } from "utils/ethers";
import { ethers } from "ethers";
import { CreateDocumentDro } from "./create.document.dro";

@Controller("api/v1/documents/create")
export class CreateDocumentsController {
  constructor() {}
  @Post()
  async create(
    @Headers() headers: any,
    @Body() createDocumentDto: CreateDocumentDto
  ) {
    const companyLogin: string = headers.login;
    const companyPassword: string = headers.password;

    const keys: any = await generateKeysFromCredentials({
      login: companyLogin,
      password: companyPassword
    });

    const blockchainClient: any = new BlockchainClient(keys.privateKey);

    const txHash = await blockchainClient.contract.registerNewSpedition(
      createDocumentDto.speditorCompanyID,
      createDocumentDto.senderCompanyID,
      createDocumentDto.recipientCompanyID,
      createDocumentDto.originLatitude,
      createDocumentDto.originLongitude,
      createDocumentDto.destinationLatitude,
      createDocumentDto.destinationLongitude,
      ethers.utils.formatBytes32String(createDocumentDto.delivieredItemHash)
    ).hash;

    const documentID: any = await new Promise(resolve => {
      blockchainClient.contract.once(
        "newSpedition",
        (sender: any, recipient: any, when: any, speditionID: any) => {
          resolve(speditionID);
        }
      );
    });

    return new CreateDocumentDro(documentID, txHash, true, 200);
  }
}
