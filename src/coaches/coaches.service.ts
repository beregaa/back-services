import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { CoachesRepository } from './coaches.repository';

@Injectable()
export class CoachesService {
  constructor(private readonly coachesRepository: CoachesRepository) {}

  create(createCoachDto: CreateCoachDto) {
    return this.coachesRepository.create(createCoachDto);
  }

  findAll() {
    return this.coachesRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} coach`;
  }

  update(id: number, updateCoachDto: UpdateCoachDto) {
    return `This action updates a #${id} coach`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
