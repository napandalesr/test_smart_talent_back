import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Guest } from 'src/guest/entities/guest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Booking,
      Guest
    ])
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
