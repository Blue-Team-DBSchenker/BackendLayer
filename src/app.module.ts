import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { RegisterCompanyModule } from "./controllers/companies/register/register.company.module";

@Module({
  imports: [RegisterCompanyModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
