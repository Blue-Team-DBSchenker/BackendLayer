import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const userProviders = [
  {
    provide: USER_MODEL_PROVIDER,
    useFactory: (Connection: connection) =>
      Connection.model('User',UserSchema),
    inject: [DB_PROVIDER],

  },
];