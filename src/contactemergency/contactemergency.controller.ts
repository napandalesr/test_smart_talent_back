import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactemergencyService } from './contactemergency.service';
import { CreateContactemergencyDto } from './dto/create-contactemergency.dto';
import { UpdateContactemergencyDto } from './dto/update-contactemergency.dto';

@Controller('contactemergency')
export class ContactemergencyController {
  constructor(private readonly contactemergencyService: ContactemergencyService) {}

  @Post()
  create(@Body() createContactemergencyDto: CreateContactemergencyDto) {
    return this.contactemergencyService.create(createContactemergencyDto);
  }

  @Get()
  findAll() {
    return this.contactemergencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactemergencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactemergencyDto: UpdateContactemergencyDto) {
    return this.contactemergencyService.update(+id, updateContactemergencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactemergencyService.remove(+id);
  }
}
