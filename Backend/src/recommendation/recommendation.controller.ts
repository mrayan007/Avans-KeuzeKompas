// Decorators
import { Controller, Post, HttpCode, Body } from '@nestjs/common';

// Services
import { RecommendationService } from './recommendation.service';

// DTO's
import { StudentDto } from './dto/student.dto';
import { RecommendationsDto } from './dto/recommendations.dto';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) { }

  @Post()
  @HttpCode(200)
  async recommend(@Body() studentDto: StudentDto): Promise<RecommendationsDto[]> {
    return this.recommendationService.recommend(studentDto);
  }
}
