// Decorators
import { Module } from '@nestjs/common';

// Modules
import { HttpModule } from '@nestjs/axios';

// Controllers
import { RecommendController } from './recommend.controller';

// Services
import { RecommendService } from './recommend.service';

@Module({
  imports: [HttpModule],
  controllers: [RecommendController],
  providers: [RecommendService]
})

export class RecommendModule { }
