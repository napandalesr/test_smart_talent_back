import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { dropWhile} from 'lodash';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { findUserByEmail } from './interfaces/findUserByEmail';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const userExist =  await this.userRepository.findOne({
      where: {
        email: createUserDto.email
      }
    });
    
    if(userExist) throw new BadRequestException('El usuario ya está registrado');
    const newUser = this.userRepository.create(createUserDto);
    const { password, ...res} = await this.userRepository.save(newUser);
    return res;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByEmail(data:findUserByEmail){
    return await this.userRepository.findOne({
      where: {
        email: data.email
      }
    })
  }
}
