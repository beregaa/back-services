import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const newBook = new Book();

    newBook.title = createBookDto.title;
    newBook.publishedDate = createBookDto.publishedDate;

    return this.bookRepository.save(newBook);
  }

  findAll() {
    return this.bookRepository.find({
      relations: { Author: true, genre: true, customer: true },
    });
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(id, updateBookDto);
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
