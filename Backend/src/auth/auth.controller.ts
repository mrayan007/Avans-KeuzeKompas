// Decorators
import { Body, Controller, HttpCode, Post } from "@nestjs/common";

// Services
import { AuthService } from "./auth.service";

// DTO's
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
// import { UserDto } from "./dto/user.dto";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<void> {
    await this.authService.register(registerDto);
  }

  @Post('signin')
  @HttpCode(200)
  async signIn(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return await this.authService.signIn(loginDto);
  }
}
