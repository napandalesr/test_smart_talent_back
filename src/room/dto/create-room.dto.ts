import { IsEnum, IsInt, IsString } from "class-validator";
import { Hotel } from "src/hotel/entities/hotel.entity";
import { typeRoomEnum } from "src/types/enums";

export class CreateRoomDto {
  @IsString()
  price: string;
  
  @IsEnum(typeRoomEnum)
  type: typeRoomEnum;

  @IsString()
  tax: string;

  @IsInt()
  amountPerson: number;

  @IsString()
  entryDate: string;

  @IsString()
  dapartureDate: string;

  hotel: Hotel;
}
