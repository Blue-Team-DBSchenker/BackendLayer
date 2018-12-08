import { Module } from '@nestjs/common';
import { IdentifyUserController } from './identify.users.controller';
import { UsersService } from '../users.service';
import { userProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IdentifyUserController],
  providers: [UsersService, ...userProviders],
})
export class IdentifyUsersModule {}