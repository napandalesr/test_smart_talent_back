import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel) 
    private readonly hotelRepository: Repository<Hotel>
  ){}

  async create(createHotelDto: CreateHotelDto) {
    return await this.hotelRepository.save({
      ...createHotelDto
    });
  }

  findAllByAgency(idUser: number) {
    return this.hotelRepository.find({
      where: {
        user: {
          id: idUser
        }
      }
    });
  }

  findAll() {
    return this.hotelRepository.find();
  }

  findOne(id: number) {
    return this.hotelRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
