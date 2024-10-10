import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService, PlayersRepository],
  imports: [TypeOrmModule.forFeature([Player])],
})
export class PlayersModule {}
