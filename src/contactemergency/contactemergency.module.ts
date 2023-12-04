import { Module } from '@nestjs/common';
import { ContactemergencyService } from './contactemergency.service';
import { ContactemergencyController } from './contactemergency.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contactemergency } from './entities/contactemergency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Contactemergency
  ])],
  controllers: [ContactemergencyController],
  providers: [ContactemergencyService],
})
export class ContactemergencyModule {}
