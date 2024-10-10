import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorsRepostiory } from './authors.repository';

@Injectable()
export class AuthorsService {
 constructor(private readonly authorRepository: AuthorsRepostiory){}

  create(createAuthorDto: CreateAuthorDto) {
    return this.authorRepository.create(createAuthorDto) ;
  }

  findAll() {
    return this.authorRepository.findAll();
  }

  findOne(id: number) {
    return this.authorRepository.findOne(id);
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.authorRepository.update(id , updateAuthorDto)
  }

  remove(id: number) {
    return this.authorRepository.remove(id);
  }
}
