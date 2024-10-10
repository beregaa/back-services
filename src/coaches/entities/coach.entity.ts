import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Coach {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  experince: number;

  @OneToOne(() => Team, (team: Team) => team.coach)
  @JoinColumn()
  team: Team;
}
