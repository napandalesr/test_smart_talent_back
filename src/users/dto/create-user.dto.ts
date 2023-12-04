import { IsString, IsEmail, IsOptional, MinLength, MaxLength } from "class-validator";
import { RoleEnum } from "src/types/enums";

export class CreateUserDto {
  @IsString()
  @MaxLength(25)
  name:string;

  @IsString()
  @MaxLength(25)
  lastName:string;

  @IsEmail()
  email:string;

  @IsString()
  @MinLength(5)
  @MaxLength(25)
  password:string;

  @IsString()
  @MaxLength(6)
  role: RoleEnum;
}
