import { HttpException, HttpStatus } from '@nestjs/common';

export const badRequestException = (message: string) => {
  return new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      error: message,
    },
    HttpStatus.BAD_REQUEST,
  );
};
