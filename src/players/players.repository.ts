import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { Team } from 'src/teams/entities/team.entity';

@Injectable()
export class PlayersRepository {
  constructor(
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,
  ) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = new Player();

    newPlayer.age = createPlayerDto.age;
    newPlayer.jerseyNumber = createPlayerDto.jerseyNumber;
    newPlayer.name = createPlayerDto.name;
    newPlayer.position = createPlayerDto.position;

    const newTeam = new Team();

    newTeam.foundationYear = createPlayerDto.team.foundationYear;
    newTeam.name = createPlayerDto.team.name;
    newPlayer.team = newTeam;

    return await this.playersRepository.save(newPlayer);
  }
  findAll() {
    return this.playersRepository
      .createQueryBuilder('player')
      .leftJoinAndSelect('player.matches', 'matches')
      .select([
        'player.id',
        'player.name',
        'player.position',
        'player.jerseyNumber',
        'player.age',
      //   'player.matches.id',
      //   'player.matches.date',
      ])
      .groupBy('player.id')

      .having('COUNT(matches.id) > :matchCount', { matchCount: 1 })
      .getMany();
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
