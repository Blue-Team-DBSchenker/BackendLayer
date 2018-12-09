import { Controller, Post, Body } from "@nestjs/common";
import { RegisterCompanyDto } from "./register.company.dto";
import { RegisterCompanyDro } from "./register.company.dro";

import { generateKeysFromCredentials } from "../../../utils/keyPairFromCredentials";

import { blockchainClient } from "../../../constants";

@Controller("api/v1/companies/register")
export class RegisterCompanyController {
  constructor() {}

  @Post()
  async register(@Body() registerCompanyDto: RegisterCompanyDto) {
    const companyName: string = registerCompanyDto.companyName;

    const keys: any = await generateKeysFromCredentials(registerCompanyDto);

    const txReceipt: any = await blockchainClient.contract.methods
      .registerNewCompany(
        keys.address,
        blockchainClient.web3.utils.fromAscii(companyName)
      )
      .send({ from: blockchainClient.accounts[0] });

    const companyID: any = txReceipt.events.companyRegistered.returnValues.id;

    const response: RegisterCompanyDro = new RegisterCompanyDro(
      keys.privateKey,
      keys.address,
      companyID
    );

    return response;
  }
}
