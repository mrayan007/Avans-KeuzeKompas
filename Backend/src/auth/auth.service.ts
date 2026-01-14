// Decorators
import { Injectable, UnauthorizedException } from "@nestjs/common";

// Services
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

// DTO's
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

// Entities
import { User } from "src/users/users.entity";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
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

  async signIn(userDto: LoginDto): Promise<{ token: string }> {
    const user = await this.usersService.findOne(userDto.email);

    if (!user) throw new UnauthorizedException('No such user.');
    if (!await bcrypt.compare(userDto.password, user.hashedPassword)) throw new UnauthorizedException('Wrong password');

    const payload = { email: user.email };
    return {
      token: await this.jwtService.signAsync(payload)
    }
  }
}
