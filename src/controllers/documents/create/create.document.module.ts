import { Module } from "@nestjs/common";
import { CreateDocumentsController } from "./create.document.controller";

@Module({
  controllers: [CreateDocumentsController]
})
export class CreateDocumentModule {}
