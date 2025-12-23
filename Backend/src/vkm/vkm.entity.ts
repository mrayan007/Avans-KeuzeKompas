// Decorators
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Vkm {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortdescription: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @Column()
  studycredit: number;

  @Column()
  location: string;

  @Column()
  contact_id: number;

  @Column()
  level: string;

  @Column()
  learningoutcomes: string;

  @Column()
  Rood: string;

  @Column()
  Groen: string;

  @Column()
  Blauw: string;

  @Column()
  Geel: string;

  @Column()
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
