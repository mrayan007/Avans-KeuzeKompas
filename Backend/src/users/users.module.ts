// Decorators
import { Module } from "@nestjs/common";

// Modules
import { TypeOrmModule } from "@nestjs/typeorm";

// Entities
import { User } from "./users.entity";

// Services
import { UsersService } from "./users.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    UsersService
  ],
  exports: [
    UsersService
  ]
})

export class UsersModule { }
