import { Controller, Body, Post, Headers } from "@nestjs/common";
import { RegisterUserDto } from "./register.user.dto";
import { generateKeysFromCredentials } from "utils/keyPairFromCredentials";
import { BlockchainClient } from "utils/ethers";
import { RegisterUserDro } from "./register.user.dro";

@Controller("api/v1/users/register")
export class RegisterUserController {
  constructor() {}

  @Post()
  async register(
    @Headers() headers: any,
    @Body() registerUserDto: RegisterUserDto
  ) {
    const companyPassword: any = headers.password;
    const companyLogin: any = headers.login;

    // TODO generates the keys

    const keys: any = await generateKeysFromCredentials({
      login: companyLogin,
      password: companyPassword
    });

    const blockchainClient: any = new BlockchainClient(keys.privateKey);

    blockchainClient.contract.registerNewEmployee(
      registerUserDto.companyID,
      registerUserDto.login,
      registerUserDto.password
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
