import { IsNumber, IsString, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlayerPositionsEnum } from '../entities/player.entity';
import { CreateTeamDto } from 'src/teams/dto/create-team.dto';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsEnum(PlayerPositionsEnum)
  position: PlayerPositionsEnum;

  @IsNumber()
  jerseyNumber: number;

  @IsNumber()
  age: number;

  @IsNumber()
  experience: number;

  teamId: number;

  @ValidateNested()
  @Type(() => CreateTeamDto)
  team: CreateTeamDto;
}
