import { Module } from '@nestjs/common';
import { CreateUsersController } from './create.users.controller';
import { UsersService } from '../users.service';
import { userProviders } from '../users.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers : [CreateUsersController],
  providers: [UsersService, ...userProviders],
})

export class CreateUsersModule{}