import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  personInCharge: string;
  @Column({ unique: true })
  title: string;
  @Column()
  startDate?: Date;
  @Column()
  program?: string;
  @Column()
  repetition?: number;
  @Column()
  theme?: string;
  @Column()
  type?: string;
  @Column()
  targetAudience?: string;
  @Column()
  Organizer?: string;
  @Column()
  attendees?: number;
  @Column()
  femaleAttendees?: number;
  @Column()
  maleAttendees?: number;
  @Column()
  nonBinaryAttendees?: number;
  @Column()
  undisclosedAttendees?: number;
  @Column()
  heardThroughTwitter?: number;
  @Column()
  heardThroughFacebook?: number;
  @Column()
  heardThroughInstagram?: number;
  @Column()
  heardThroughMastodon?: number;
  @Column()
  heardThroughNewsletter?: number;
  @Column()
  heardThroughWeb?: number;
  @Column()
  heardThroughSigns?: number;
  @Column()
  heardThroughOther?: number;
  @Column()
  children?: number;
  @Column()
  streaming?: string;
  @Column()
  notes?: string;
  @Column()
  endDate?: Date
}