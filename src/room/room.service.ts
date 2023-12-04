import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) 
    private readonly roomRepository: Repository<Room>
  ){}

  async create(createRoomDto: CreateRoomDto) {
    return await this.roomRepository.save({
      ...createRoomDto
    });
  }

  findAll() {
    return `This action returns all room`;
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
