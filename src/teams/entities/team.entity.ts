import { Coach } from 'src/coaches/entities/coach.entity';
import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  foundationYear: number;

  @OneToMany(() => Player, (player: Player) => player.team)
  players: Player[];

  @OneToOne(() => Coach, (coach: Coach) => coach.team)
  coach: Coach;
}
