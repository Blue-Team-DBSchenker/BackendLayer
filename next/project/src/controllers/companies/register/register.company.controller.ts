import { Controller, Post, Headers, Body } from '@nestjs/common';
import { CompnayService } from '../company.service';
import { CreateCompanyDto } from './register.company.dto';
import { Model } from 'mongoose';
import { UsersService } from '../../users/users.service';
import { UserInterface } from '../../users/user.interface';
import { CompanyInterface } from '../company.interface';
//
@Controller('api/v1/companies/create')
export class CreateCompnayController {
  constructor(
    private readonly userModel: Model<CompanyInterface>,
    private readonly rideService: CompnayService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async createRide(
    @Headers() headers: any,
    @Body() createRideDto:  CreateCompanyDto,
  ) {
    const exhibitorSession: string = headers.session;

    let exhibitor: UserInterface = await this.userService.getUserBySesion(
      exhibitorSession,
    );

    if (exhibitor === null) {
      return { error: true, code: 201 };
    }

    //const rideDate: Date = new Date(createRideDto.when);
    const CompanyName = new this.userModel(createRideDto.companyId);
    //const alreadyExistingUser = await this.getUserByU(createUserDto.username);
   // if (isNaN(rideDate.getTime()) === true) {
     // return { error: true, code: 202 };
    //}

    const company: CompanyInterface = await this.rideService.create(
      createRideDto,
      exhibitor.username,
      CompanyName,
    );

    const companyId: string = company.companyId;

    exhibitor.companies.push(company);

    await this.userService.updateUsersPositions(exhibitor.session, exhibitor.companies);

    return { error: false, rideId: companyId };
  }
}