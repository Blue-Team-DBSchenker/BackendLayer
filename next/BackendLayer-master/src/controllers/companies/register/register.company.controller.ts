import { Controller, Post, Headers, Body } from '@nestjs/common';
import { CompnayService } from '../company.service';
import { CreateCompanyDto } from './register.company.dto';

import { UsersService } from '../../users/users.service';
import { UserInterface } from '../../users/user.interface';
import { CompanyInterface } from '../company.interface';
//
@Controller('api/v1/rides/create')
export class CreateCompnayController {
  constructor(
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
    const CompanyName = new this.userModel(createRideDto);
    //const alreadyExistingUser = await this.getUserByU(createUserDto.username);
   // if (isNaN(rideDate.getTime()) === true) {
     // return { error: true, code: 202 };
    //}

    const ride: CompanyInterface = await this.rideService.create(
      createRideDto,
      exhibitor.username,
      CompanyName,
    );

    //const rideId: number = ride.ride_id;

    //exhibitor.rides.push(ride);

    //await this.userService.updateUsersRides(exhibitor.session, exhibitor.rides);

   // return { error: false, rideId: rideId };
  }
}