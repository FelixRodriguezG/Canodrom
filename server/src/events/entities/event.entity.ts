import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  program: string;
  @Column()
  repetition: number;
  @Column()
  attendees: number;
  @Column()
  theme: string;
  @Column()
  type: string;
  @Column()
  targetAudience: string;
  @Column()
  Organizer: string;
}