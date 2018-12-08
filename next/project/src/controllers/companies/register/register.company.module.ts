import { Module } from '@nestjs/common';
import { CreateCompnayController} from './register.company.controller';
import { CompnayService } from '../company.service';

import {  ridesProviders  } from '../company.providers';
import { DatabaseModule } from '../../../database/database.module';

import { userProviders } from '../../users/users.providers';
import { UsersService } from '../../users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ CreateCompnayController ],
  providers: [CompnayService, ...ridesProviders, UsersService, ...userProviders],
})
export class CreateRidesModule {}