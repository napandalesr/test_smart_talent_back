import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { Booking } from 'src/booking/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Guest,
      Booking
    ])
  ],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
