// Decorators
import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  hashedPassword: string;

  @Column('simple-array')
  favourites: number[]
}
