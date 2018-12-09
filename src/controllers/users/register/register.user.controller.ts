import { Controller, Body, Post, Headers } from "@nestjs/common";
import { RegisterUserDto } from "./register.user.dto";
import { generateKeysFromCredentials } from "utils/keyPairFromCredentials";
import { BlockchainClient } from "utils/ethers";
import { RegisterUserDro } from "./register.user.dro";
import { ethers } from "ethers";

@Controller("api/v1/users/register")
export class RegisterUserController {
  constructor() {}

  @Post()
  async register(
    @Headers() headers: any,
    @Body() registerUserDto: RegisterUserDto
  ) {
    const companyPassword: string = headers.password;
    const companyLogin: string = headers.login;

    // TODO generates the keys

    const keys: any = await generateKeysFromCredentials({
      login: companyLogin,
      password: companyPassword
    });

    const blockchainClient: any = new BlockchainClient(keys.privateKey);

    blockchainClient.contract.registerNewEmployee(
      registerUserDto.companyID,
      ethers.utils.formatBytes32String(registerUserDto.login),
      ethers.utils.formatBytes32String(registerUserDto.password)
    );

    const IDs: any = await new Promise(resolve => {
      blockchainClient.contract.once(
        "companyRegistersNewEmployee",
        (
          companyID: any,
          login: any,
          password: any,
          employeeCompanyID: any,
          employeeSystemID: any
        ) => {
          resolve({ employeeSystemID, employeeCompanyID });
        }
      );
    });

    return new RegisterUserDro(
      true,
      200,
      IDs.employeeSystemID,
      IDs.employeeCompanyID
    );
  }
}
