import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt'
  ){
  constructor(
    private userServices: UsersService,
    private config: ConfigService
  ){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_TOKEN
    });
  }

  async validate(payload: any){
    const { sub: id } = payload;
    return await this.userServices.findOne(id);
  }
}