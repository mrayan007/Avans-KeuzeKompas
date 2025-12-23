// Decorators
import { Module } from "@nestjs/common";

// Modules
import { UsersModule } from "src/users/users.module";

// Services
import { AuthService } from "./auth.service";

// Controller
import { AuthController } from "./auth.controller";

@Module({
  imports: [
    UsersModule
  ],
  providers: [
    AuthService
  ],
  controllers: [
    AuthController
  ]
})

export class AuthModule { }
