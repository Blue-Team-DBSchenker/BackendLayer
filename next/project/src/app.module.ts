import { Module } from '@nestjs/common';
//import{ AppController}
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUsersModule } from './controllers/users/create/create.users.module';
import { AuthenticateUsersModule } from './controllers/users/auth/auth.users.module';
import { AddUserLocationModule } from './controllers/users/location/location.users.module';
import { IdentifyUsersModule } from './controllers/users/identify/identify.users.module';
//import { PlacesModule } from './controllers/places/places.module';
import { CreateRidesModule } from './controllers/companies/register/register.company.module';
import { DeleteCompanyModule } from './controllers/companies/delete/delete.ride.module';
import { SearchRidesModule } from './controllers/companies/search/search.ride.module';
import { JoinRidesModule } from './controllers/companies/join/join.ride.module';
//import { AuthController } from './auth/auth.controller';




@Module({
  imports: [
    CreateUsersModule,
    AuthenticateUsersModule,
    AddUserLocationModule,
   // PlacesModule,
    IdentifyUsersModule,
    CreateRidesModule,
    DeleteCompanyModule,
    SearchRidesModule,
    JoinRidesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
