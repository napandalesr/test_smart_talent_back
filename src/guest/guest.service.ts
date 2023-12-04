import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { Repository } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(Guest) 
    private readonly guestRepository: Repository<Guest>,

    @InjectRepository(Booking) 
    private readonly bookingepository: Repository<Booking>
  ){}

  async create(createGuestDto: CreateGuestDto) {
    const booking = await this.bookingepository.save({
      room: {
        id: createGuestDto.roomId
      },
      user: {
        id: createGuestDto.userId
      }
    });

    return await this.guestRepository.save({
      birthdate: createGuestDto.birthdate,
      booking,
      documentNumber: createGuestDto.documentNumber,
      documentType: createGuestDto.documentType,
      email: createGuestDto.email,
      gender: createGuestDto.gender,
      name: createGuestDto.name,
      last_name: createGuestDto.lastName,
      telephone: createGuestDto.telephone
    });
  }

  findAll() {
    return `This action returns all guest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guest`;
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}
