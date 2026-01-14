// Decorators
import { Injectable, NotFoundException } from "@nestjs/common";
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
    if (!email) return null;
    return this.usersRepository.findOneBy({ email: email });
  }

  async addModule(email: string, index: number): Promise<void> {
    const user = await this.findOne(email);
    console.log(user);

    if (!user) throw new NotFoundException('User not found.');
    user?.favourites.push(index);

    await this.usersRepository.save(user);
  }

  async deleteModule(email: string, index: number): Promise<void> {
    const user = await this.findOne(email);

    if (!user) throw new NotFoundException('User not found.');

    console.log(index, user);
    user.favourites = user.favourites.filter(i => Number(i) !== index);
    console.log(user);

    await this.usersRepository.save(user);
  }
}
