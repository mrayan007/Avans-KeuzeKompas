// Decorators
import { Injectable } from "@nestjs/common";

// Services
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';

// DTO's
import { RegisterDto } from "./dto/register.dto";

// Entities
import { User } from "src/users/users.entity";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService
  ) { }

  async register(userDto: RegisterDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userDto.password, salt);

    const user = new User();
    user.firstName = userDto.firstName;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.hashedPassword = hashedPassword;

    await this.usersService.createOne(user);
  }
}
