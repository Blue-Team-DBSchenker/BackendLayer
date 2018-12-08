import { Document } from 'mongoose';
import { Place } from '../places/place.class';
import { user } from '../users/user.class';

export interface CompanyInterface extends Document {
  readonly companyId: number;
  readonly companyName: string;
  //readonly name: Array<string>;
  
  
}