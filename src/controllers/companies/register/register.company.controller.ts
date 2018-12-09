import { Controller, Post, Body } from "@nestjs/common";
import { RegisterCompanyDto } from "./register.company.dto";
import { RegisterCompanyDro } from "./register.company.dro";

import { generateKeysFromCredentials } from "../../../utils/keyPairFromCredentials";
import { BlockchainClient } from "utils/ethers";
import { ethers } from "ethers";

@Controller("api/v1/companies/register")
export class RegisterCompanyController {
  constructor() {}

  @Post()
  async register(@Body() registerCompanyDto: RegisterCompanyDto) {
    const companyName: string = registerCompanyDto.companyName;

    const keys: any = await generateKeysFromCredentials(registerCompanyDto);

    const blockchainClient: any = new BlockchainClient(keys.privateKey);

    const companyID: any = await new Promise(resolve => {
      blockchainClient.contract.once(
        "companyRegistered",
        (address: any, name: any, id: any) => {
          resolve(id);
        }
      );
    });

    return new RegisterCompanyDro(
      keys.privateKey,
      keys.address,
      Number(ethers.utils.bigNumberify(companyID))
    );
  }
}
