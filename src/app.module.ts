import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoomModule } from './room/room.module';
import { HotelModule } from './hotel/hotel.module';
import { GuestModule } from './guest/guest.module';
import { BookingModule } from './booking/booking.module';
import { ContactemergencyModule } from './contactemergency/contactemergency.module';

import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService)=>({
        type: "mysql",
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname+'./**/**/*entity{.js,.ts}'],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        logger: 'file'
      })
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    AuthModule,
    UsersModule,
    RoomModule,
    HotelModule,
    GuestModule,
    BookingModule,
    ContactemergencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
