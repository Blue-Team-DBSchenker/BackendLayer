import { Document } from 'mongoose';
//import { Connection } from 'mongoose'
import { UserPosition } from './location/users.position.class';
import { CompanyInterface } from '../companies/company.interface';

export interface UserInterface extends Document {
  companies: any;
  readonly username: string;
  readonly password: string;
  readonly session: string;
  readonly documentId: string;
  readonly positions: Array<UserPosition>;
  //readonly Compnay: Array<Company>;
  //readonly latitude: Array<>;
  //readonly rides: Array<RideInterface>;
}