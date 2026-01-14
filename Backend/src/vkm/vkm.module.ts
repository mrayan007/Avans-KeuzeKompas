// Decorators
import { Module } from "@nestjs/common";

// Modules
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "src/auth/auth.module";

// Controllers
import { VkmController } from "./vkm.controller";

// Services
import { VkmService } from "./vkm.service";

// Entities
import { Vkm } from "./vkm.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Vkm]),
    UsersModule,
    AuthModule
  ],
  controllers: [
    VkmController
  ],
  providers: [
    VkmService
  ]
})

export class VkmModule { }
