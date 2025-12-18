// Decorators
import { Controller, Post, HttpCode, Body } from '@nestjs/common';

// Services
import { RecommendService } from './recommend.service';

// DTO's
import { InputRecommendDto } from './dto/recommend.dto';

// Interfaces
import { Recommendation } from './interfaces/recommendation.interface';

@Controller('recommend')
export class RecommendController {
  constructor(private recommendService: RecommendService) { }

  @Post()
  @HttpCode(200)
  async recommend(@Body() inputDto: InputRecommendDto): Promise<Recommendation[]> {
    return this.recommendService.recommend(inputDto);
  }
}
