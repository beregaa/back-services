import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;

  @Type(() => Date)
  @IsDate()
  birthDate: Date;
}
