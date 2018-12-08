import { Document } from 'mongoose';
import { UserPosition } from './location/users.position.class';
import { RideInterface } from 'controllers/rides/ride.interface';

export interface UserInterface extends Document {
  readonly username: string;
  readonly password: string;
  readonly session: string;
  readonly documentId: string;
  readonly positions: Array<UserPosition>;
  //readonly Compnay: Array<Company>;
  //readonly latitude: Array<>;
  //readonly rides: Array<RideInterface>;
}