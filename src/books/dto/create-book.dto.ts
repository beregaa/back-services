import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @Type(() => Date)  
  @IsDate()
  publishedDate: Date;
}
