import { IsEnum, IsString, MaxLength } from "class-validator";
import { statusHotelEnum } from "src/types/enums";
import { User } from "src/users/entities/user.entity";

export class CreateHotelDto {
  @IsString()
  @MaxLength(25)
  name:string;

  @IsString()
  @MaxLength(25)
  direction: string;

  @IsString()
  @MaxLength(25)
  city: string;

  @IsEnum(statusHotelEnum)
  status: statusHotelEnum;

  user?: User;
}
