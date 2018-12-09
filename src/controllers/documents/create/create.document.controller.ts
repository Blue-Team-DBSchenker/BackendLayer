import { Controller, Post, Body, Headers } from "@nestjs/common";
import { CreateDocumentDto } from "./create.document.dto";

@Controller("api/v1/documents/create")
export class CreateDocumentsController {
  constructor() {}
  @Post()
  async create(
    @Headers() headers: any,
    @Body() registerUserDto: CreateDocumentDto
  ) {}
}
