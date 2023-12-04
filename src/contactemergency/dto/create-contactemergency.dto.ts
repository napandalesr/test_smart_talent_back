import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateContactemergencyDto {
  @IsString()
  @MaxLength(25)
  name:string;

  @IsNumber()
  telephone: number;

  @IsNumber()
  bookingId: number;
}
