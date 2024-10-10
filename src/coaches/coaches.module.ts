import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { CoachesRepository } from './coaches.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coach } from './entities/coach.entity';

@Module({
  controllers: [CoachesController],
  providers: [CoachesService, CoachesRepository],
  imports: [TypeOrmModule.forFeature([Coach])],
})
export class CoachesModule {}
