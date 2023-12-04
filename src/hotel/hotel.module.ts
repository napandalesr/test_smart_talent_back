import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { User } from 'src/users/entities/user.entity';
import { Room } from 'src/room/entities/room.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Hotel,
    User,
    Room
  ])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
