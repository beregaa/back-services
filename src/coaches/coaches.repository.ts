import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coach } from './entities/coach.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoachesRepository {
  constructor(
    @InjectRepository(Coach)
    private readonly coachRepository: Repository<Coach>,
  ) {}
  create(createCoachDto: CreateCoachDto) {
    const newCoach = new Coach();

    newCoach.name = createCoachDto.name;
    newCoach.experince = createCoachDto.experince;

    return this.coachRepository.save(newCoach);
  }

  // findAll() {
  //   return this.coachRepository.find({
  //     relations: { team: { players: true } },
  //   });
  // }

  findAll() {
    return this.coachRepository
      .createQueryBuilder('coach')
      .leftJoinAndSelect('coach.team', 'team')
      .leftJoinAndSelect('team.players', 'player')
      .where('player.experience > :exp', { exp: 3 })
      .getSql();
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
