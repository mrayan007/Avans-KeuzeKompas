// Decorators
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Vkm {
  @PrimaryColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  shortdescription: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @Column()
  studycredit: number;

  @Column('text')
  location: string;

  @Column()
  contact_id: number;

  @Column('text')
  level: string;

  @Column('text')
  learningoutcomes: string;

  @Column()
  Rood: string;

  @Column()
  Groen: string;

  @Column()
  Blauw: string;

  @Column()
  Geel: string;

  @Column('text')
  module_tags: string;

  @Column()
  interests_match_score: number;

  @Column()
  popularity_score: number;

  @Column()
  estimated_difficulty: number;

  @Column()
  available_spots: number;

  @Column()
  start_date: string;
}
