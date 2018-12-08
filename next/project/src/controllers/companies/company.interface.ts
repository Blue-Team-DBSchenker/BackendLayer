import { Document } from 'mongoose';
//import { Place } from '../places/place.class';
import { user } from '../users/user.class';

export interface CompanyInterface extends Document {
  readonly companyId:string;
  readonly companyName: string;
 // readonly username: String;
  readonly password: string;
  //readonly name: Array<string>;
  
  
}