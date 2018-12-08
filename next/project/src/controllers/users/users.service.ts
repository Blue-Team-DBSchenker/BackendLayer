import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { UserInterface } from './user.interface';
import { CreateUserDto } from './create/dto/create.user.dto';
import { USER_MODEL_PROVIDER } from '../../constants';

import { UserPosition } from './location/users.position.class';
//import { Place } from '../places/place.class';
//import { RideInterface } from 'controllers/rides/ride.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER)
    private readonly userModel: Model<UserInterface>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createUserDto);
    const alreadyExistingUser = await this.getUserByUserName(createUserDto.username);

    if (alreadyExistingUser !== null) {
      throw new Error('User with this UserName already exists. Try another');
    }

    return await createdUser.save();
  }

  async getUserByUserName(username: string): Promise<UserInterface> {
    return await this.userModel.findOne({ username })
  }

  async getUserBySesion( session: string): Promise<UserInterface> {
    return await this.userModel.findOne({  session })
  }

  async updateUsersSession(username: string, newSession: string): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { username },
      {
        $set: { session: newSession },
      },
    );
  }

  async updateUsersPositions(
    userSession: string,
    locations: Array<UserPosition>,
  ): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { session: userSession },
      {
        $set: { positions: locations },
      },
    );
  }

}

