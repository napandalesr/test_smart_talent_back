import { PartialType } from '@nestjs/swagger';
import { CreateContactemergencyDto } from './create-contactemergency.dto';

export class UpdateContactemergencyDto extends PartialType(CreateContactemergencyDto) {}
