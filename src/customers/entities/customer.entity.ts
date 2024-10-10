import { IsEmail } from 'class-validator';
import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => Book, (books: Book) => books.customer)
  books: Book[];
}
