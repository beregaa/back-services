import { IsNumber, IsString, isString } from 'class-validator';

export class createAuthDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
