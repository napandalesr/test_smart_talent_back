import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() req: any) {
    return await this.authService.login(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('verify')
  verify(@Body() req: any){
    return this.authService.verify(req);
  }
}