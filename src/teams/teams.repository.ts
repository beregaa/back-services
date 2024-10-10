import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class TeamsRepository {
  constructor(
    @InjectRepository(Team) private readonly teamsRepository: Repository<Team>,
  ) {}
  async create(createTeamDto: CreateTeamDto) {
    const newTeam = new Team();

    newTeam.foundationYear = createTeamDto.foundationYear;
    newTeam.name = createTeamDto.name;
    return this.teamsRepository.save(newTeam);
  }

  // findAll() {
  //   return this.teamsRepository.find({
  //     relations: { players: true, coach: true },
  //   });
  // }

  findAll() {
    return this.teamsRepository
      .createQueryBuilder('teams')
      .leftJoinAndSelect('teams.players', 'players')
      .leftJoinAndSelect('players.matches', 'matches') // Join matches through players
      .getMany();
  }
  

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
