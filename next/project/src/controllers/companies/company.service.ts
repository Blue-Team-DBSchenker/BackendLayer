import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { CompanyInterface } from './company.interface';
import { CreateCompanyDto } from './register/register.company.dto';
import { COMPANY_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class CompnayService {
  constructor(
    @Inject(COMPANY_MODEL_PROVIDER)
    private readonly companyModel: Model<CompanyInterface>,
  ) {}

  async create(
    createRideDto: CreateRideDto,
    exhibitorsMail: string,
    when: Date,
  ): Promise<CompanyInterface> {
    const addedCompany= new this.companyModel(CreateCompanyDto);
    //const alreadyExistingUser = await this.getUserByUserName(CreateCompanyDto.);
    /*  
    const lastRide: CompanyInterface[] = await this.rideModel
      .find({})
      .sort({ _id: -1 })
      .limit(1);

    if (lastRide.length === 0) {
      addedCompany.ride_id = 0;
    } else {
      addedCompany.ride_id = lastRide[0].companyId + 1;
    }
*/
    addedCompany.addedOn = new Date().getTime();
    addedCompany.exhibitorsMail = exhibitorsMail;
    addedCompany.when = when;
    await addedCompany.save();
    return addedCompany;
  }


 /* async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    //const createdUser = new this.userModel(createUserDto);
   // const alreadyExistingUser = await this.getUserByUserName(createUserDto.username);

    if (alreadyExistingUser !== null) {
      throw new Error('User with this UserName already exists. Try another');
    }

    return await createdUser.save();
  */

  async getUserByUserName(username: string): Promise<UserInterface> {
    return await this.companyModel.findOne({ username })
  }


  async getAll(): Promise<CompanyInterface[]> {
    return await this.companyModel.find().exec();
  }

  async getCompanyById(_id: number) {
    return await this.companyModel.findOne({ companyId: _id });
  }

  async removeById(_id: number) {
    await this.companyModel.findOneAndRemove({ companyId: _id });
  }

  async updateCompanyById(_id: number, updatedRide: CompanyInterface): Promise<void> {
    await this.companyModel.findOneAndUpdate(
      { companyId: _id },
      {
        $set: updatedRide,
      },
    );
  }
/*
  async getCopanyByCountryCityTimeAndSeats(
    country: string,
    city: string,
    when: Date,
    seats: number,
  ): Promise<CompanyInterface[]> {
    return await this.companyModel.find({
      country: country,
      city: city,
      //when: { $gte: new Date(when) },
      $where: '4 - this.passengers.length >= ' + seats,
    });
  }
*/
}