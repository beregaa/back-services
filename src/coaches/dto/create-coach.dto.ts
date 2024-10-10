import { IsNumber, IsString } from 'class-validator';

export class CreateCoachDto {
  @IsString()
  name: string;

  @IsNumber()
  experince: number;
}
