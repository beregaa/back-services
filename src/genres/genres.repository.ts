import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresRepository {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepostitory: Repository<Genre>,
  ) {}
  create(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();

    newGenre.name = createGenreDto.name;
    return this.genreRepostitory.save(createGenreDto);
  }

  findAll() {
    return this.genreRepostitory.find();
  }

  findOne(id: number) {
    return this.genreRepostitory.findOne({ where: { id: id } });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.genreRepostitory.update(id, updateGenreDto);
  }

  remove(id: number) {
    return this.genreRepostitory.delete(id);
  }
}
