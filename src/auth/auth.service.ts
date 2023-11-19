import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from "bcryptjs";

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

import 'dotenv/config';
import { badRequestException } from 'src/utils/HttpExceptions';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ){}

  async validateUser(email:string, pass:string){
    const user = await this.userService.findByEmail({email});
    
    if(user) {
      if(await compare(pass,user.password)) {
        const { password, ...rest } = user;
        return rest;
      }
    }

    return  null;
  }

  verify({token}) {
    try {
      this.jwtService.verify(token,{
        secret: process.env.JWT_TOKEN
      });
      return {
        authorized: true,
      }
    } catch (error) {
      return badRequestException("Token inválido");
    }
  }

  async login(user: User){
    const { email, password } = user;
    const userValidated =await  this.validateUser(email, password);
    
    if(userValidated) {
      const payload = { sub: userValidated.id };
      return {
        ...userValidated,
        accessToken: this.jwtService.sign(payload)
      }
    }
    return badRequestException("Usuario o contraseña incorrecta");
  }

}