import { Controller, Body, Post, Headers } from "@nestjs/common";
import { RegisterUserDto } from "./register.user.dto";
import { generateKeysFromCredentials } from "utils/keyPairFromCredentials";
import { blockchainClient } from "../../../constants";

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

    const account: any = blockchainClient.web3.eth.accounts.privateKeyToAccount(
      keys.privateKey
    );

    // TODO creating accounts from privateKeys
  }
}
