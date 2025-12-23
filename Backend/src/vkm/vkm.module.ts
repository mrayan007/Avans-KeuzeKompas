// Decorators
import { Module } from "@nestjs/common";

// Modules
import { TypeOrmModule } from "@nestjs/typeorm";

// Controllers
import { VkmController } from "./vkm.controller";

// Services
import { VkmService } from "./vkm.service";

// Entities
import { Vkm } from "./vkm.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Vkm])
  ],
  controllers: [
    VkmController
  ],
  providers: [
    VkmService
  ]
})

export class VkmModule { }
