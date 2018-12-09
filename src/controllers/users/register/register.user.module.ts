import { Module } from "@nestjs/common";
import { RegisterUserController } from "./register.user.controller";

@Module({
  controllers: [RegisterUserController]
})
export class RegisterUserModule {}
