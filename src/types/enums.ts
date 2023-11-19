import { Request } from 'express';

export enum RoleEnum {
  AGENCY= 'AGENCY',
  TRAVELER= 'TRAVELER'
}

export enum statusHotelEnum {
  ENABLE = 'ENABLE',
  DISABLE = 'DESABLE'
}

export enum typeRoomEnum {
  DOUBLE = 'DOUBLE',
  SIMPLE = 'SIMPLE'
}

export enum typeGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum documentTypeEnum {
  CC = 'CC',
  CE = 'CE',
  TI = 'TI'
}

export type Token = {
  id?: string;
};

export type RequestWithTokenData = Request & { user: Token };