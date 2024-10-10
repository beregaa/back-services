import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AuthorsRepostiory } from './authors.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorsService , AuthorsRepostiory],
})
export class AuthorsModule {}
