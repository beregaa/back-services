import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatchesRepository {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}
  create(createMatchDto: CreateMatchDto) {
    const newMatch = new Match();

    newMatch.name = createMatchDto.name;
    newMatch.date = createMatchDto.date;
    return this.matchRepository.save(newMatch);
  }

  // findAll() {
  //   return this.matchRepository.find({ relations: { players: true } });
  // }
findAll() {
  return this.matchRepository
    .createQueryBuilder('matche')
    .leftJoin('matche.players', 'players')
    .select('players.team', 'teamId')
    .addSelect('COUNT(DISTINCT matche.id)', 'matchesCount')
    .groupBy('players.team')
    .getSql();
}

  
  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
