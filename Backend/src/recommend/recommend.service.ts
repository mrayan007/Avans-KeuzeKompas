// Decorators
import { Injectable } from "@nestjs/common";

// Services
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";

// Interfaces
import { Recommendation } from "./interfaces/recommendation.interface";

// DTO's
import { InputRecommendDto } from "./dto/recommend.dto";

@Injectable()
export class RecommendService {
  constructor(private readonly httpService: HttpService) { }

  async recommend(inputDto: InputRecommendDto): Promise<Recommendation[]> {
    const { data } = await firstValueFrom(
      this.httpService.post(process.env.FASTAPI_URL as string, inputDto)
    );
    return data;
  }
}
