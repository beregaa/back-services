import { Match } from 'src/matches/entities/match.entity';
import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PlayerPositionsEnum {
  striker = 'striker',
  defender = 'defender',
  goalKeeper = 'goalkeeper',
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: PlayerPositionsEnum })
  position: PlayerPositionsEnum;

  @Column()
  jerseyNumber: number;

  @Column()
  age: number;

  @Column()
  experience: number;

  @Column({ nullable: true })
  teamId: number;

  @ManyToOne(() => Team, (team: Team) => team.players, {
    cascade: true,
  })
  team: Team;

  @ManyToMany(() => Match, (match: Match) => match.players)
  matches: Match[];
}
