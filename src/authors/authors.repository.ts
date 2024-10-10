import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsRepostiory {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new Author();

    newAuthor.name = createAuthorDto.name;
    newAuthor.birthDate = createAuthorDto.birthDate;

    return this.authorRepository.save(newAuthor);
  }

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return this.authorRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number) {
    return this.authorRepository.delete(id);
  }
}
