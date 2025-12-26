// Decorators
import { Module } from "@nestjs/common";

// Modules
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";

// Services
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";

// Controller
import { AuthController } from "./auth.controller";

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '15m' }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService
  ],
  controllers: [
    AuthController
  ]
})

export class AuthModule { }
