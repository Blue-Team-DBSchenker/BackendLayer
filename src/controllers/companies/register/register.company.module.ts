import { Module } from "@nestjs/common";
import { RegisterCompanyController } from "./register.company.controller";

@Module({
  controllers: [RegisterCompanyController]
})
export class RegisterCompanyModule {}
