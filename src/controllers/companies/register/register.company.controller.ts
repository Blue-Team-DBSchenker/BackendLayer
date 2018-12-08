import { Controller, Post, Body } from "@nestjs/common";
import { RegisterCompanyDto } from "./register.company.dto";
import { sha512 } from "js-sha512";
import * as randomSeed from "random-seed";

@Controller("api/v1/companies/register")
export class RegisterCompanyController {
  constructor() {}

  @Post()
  async register(@Body() registerCompanyDto: RegisterCompanyDto) {
    const companyName: string = registerCompanyDto.companyName;
    const hash: string = sha512(
      registerCompanyDto.login + registerCompanyDto.password
    );

    const rand: string = randomSeed.create(hash);

    console.log(rand);
  }
}
