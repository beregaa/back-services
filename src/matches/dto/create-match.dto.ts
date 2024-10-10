import { IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  name: string;

  @IsString()
  date: string;
}
