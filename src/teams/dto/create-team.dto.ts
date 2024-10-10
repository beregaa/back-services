import { IsNumber, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsNumber()
  foundationYear: number;
}
