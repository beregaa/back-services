import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { GenresRepository } from './genres.repository';

@Injectable()
export class GenresService {
  constructor(private readonly genereRepository: GenresRepository) {}

  create(createGenreDto: CreateGenreDto) {
    return this.genereRepository.create(createGenreDto);
  }

  findAll() {
    return this.genereRepository.findAll();
  }

  findOne(id: number) {
    return this.genereRepository.findOne(id);
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.genereRepository.update(id, updateGenreDto);
  }

  remove(id: number) {
    return this.genereRepository.remove(id);
  }
}
