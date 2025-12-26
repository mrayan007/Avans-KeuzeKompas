// Decorators
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// Repositories
import { Repository } from "typeorm";

// Entities
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async createOne(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email: email });
  }
}
