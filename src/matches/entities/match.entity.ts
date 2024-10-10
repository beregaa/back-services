import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  date: string;

  @ManyToMany(() => Player, (player: Player) => player.matches, {
   
  })
  @JoinTable()
  players: Player[];
}
