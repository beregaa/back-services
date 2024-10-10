import { Author } from 'src/authors/entities/author.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publishedDate: Date;

  @ManyToOne(() => Author, (author: Author) => author.book)
  Author: Author;

  @ManyToOne(() => Genre, (genre: Genre) => genre.books)
  genre: Genre;

  @ManyToMany(()=>Customer , (customer:Customer)=> customer.books)
  @JoinTable()
  customer:Customer[]
}
