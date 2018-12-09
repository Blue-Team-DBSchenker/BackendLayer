import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { RegisterCompanyModule } from "./controllers/companies/register/register.company.module";
import { RegisterUserModule } from "./controllers/users/register/register.user.module";
import { CreateDocumentModule } from "./controllers/documents/create/create.document.module";

@Module({
  imports: [RegisterCompanyModule, RegisterUserModule, CreateDocumentModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
