import { IsEnum, IsNumber, IsString, MaxLength } from "class-validator";
import { documentTypeEnum, typeGender } from "src/types/enums";

export class CreateGuestDto {
  @IsString()
  @MaxLength(25)
  name: string;

  @IsString()
  @MaxLength(25)
  lastName: string;

  @IsString()
  @MaxLength(25)
  birthdate: string;

  @IsEnum(typeGender)
  gender: typeGender;

  @IsEnum(documentTypeEnum)
  documentType: documentTypeEnum;

  @IsNumber()
  documentNumber: number

  @IsString()
  email: string;

  @IsNumber()
  telephone: number;

  @IsNumber()
  roomId: number;

  @IsNumber()
  userId: number;
}
