import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {

  constructor(private readonly matchesRepository:MatchesRepository){}
  create(createMatchDto: CreateMatchDto) {
    return this.matchesRepository.create(createMatchDto);
  }

  findAll() {
    return this.matchesRepository.findAll();
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
