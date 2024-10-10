import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  create(createPlayerDto: CreatePlayerDto) {
    return this.playersRepository.create(createPlayerDto);
  }

  findAll() {
    return this.playersRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
