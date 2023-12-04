import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';
import { Room } from './entities/room.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Room,
      Booking,
      Hotel
    ])
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
