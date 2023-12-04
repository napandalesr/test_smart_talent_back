import { Injectable } from '@nestjs/common';
import { CreateContactemergencyDto } from './dto/create-contactemergency.dto';
import { UpdateContactemergencyDto } from './dto/update-contactemergency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contactemergency } from './entities/contactemergency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactemergencyService {
  constructor(
    @InjectRepository(Contactemergency) 
    private readonly contactRepository: Repository<Contactemergency>,
  ){}

  async create(createContactemergencyDto: CreateContactemergencyDto) {
    return await this.contactRepository.save(createContactemergencyDto);
  }

  findAll() {
    return `This action returns all contactemergency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactemergency`;
  }

  update(id: number, updateContactemergencyDto: UpdateContactemergencyDto) {
    return `This action updates a #${id} contactemergency`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactemergency`;
  }
}
