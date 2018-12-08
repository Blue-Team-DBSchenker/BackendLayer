import { Controller, Post, Body, Headers } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { CompnayService } from '../company.service';
import { JoinRideDto } from './join.ride.dto';
import { UserInterface } from '../../users/user.interface';
import { CompanyInterface } from '../company.interface';

@Controller('api/v1/rides/join')
export class JoinRideController {
  constructor(
    private readonly userService: UsersService,
    private readonly rideService: CompnayService,
  ) {}

  @Post()
  async joinRide(@Headers() headers: any, @Body() joinRideDto: JoinRideDto) {
    const userSession: string = headers.session;

    const user: UserInterface = await this.userService.getUserBySesion(
      userSession,
    );

    if (user === null) {
      return { error: true, code: 251 };
    }

    let compnay: CompanyInterface  = await this.rideService.getCompanyById(
      joinRideDto.companyName,
    );

    if (compnay === null) {
      return { error: true, code: 252 };
    }

    if (compnay.companyId.indexOf(user.username) > -1) {
      return { error: true, code: 253 };
    }

   // compnay.companyId.push(user.username);

   // for (let i: number = 0; i < joinRideDto.companyName - 1; i++) {
     // compnay.companyid.(user.username + '-guest');
    //}

    //await this.rideService.updateCompanyById(joinRideDto.companyName,);

   // const rideCost = (ride.cost / 4) * joinRideDto.seats;

    //return { error: false, rideCost: rideCost };
  }
}
