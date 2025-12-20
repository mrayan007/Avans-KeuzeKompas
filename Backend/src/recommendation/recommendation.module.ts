// Decorators
import { Module } from "@nestjs/common";

// Modules
import { HttpModule } from "@nestjs/axios";

// Controllers
import { RecommendationController } from "./recommendation.controller";

// Services
import { RecommendationService } from "./recommendation.service";

@Module({
  imports: [
    HttpModule
  ],
  controllers: [
    RecommendationController
  ],
  providers: [
    RecommendationService
  ]
})

export class RecommendationModule { }
