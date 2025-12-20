// Decorators
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

// DTO's
import { StudentDto } from "./dto/student.dto";
import { RecommendationsDto } from "./dto/recommendations.dto";

// RxJS
import { firstValueFrom } from "rxjs";

@Injectable()
export class RecommendationService {
  private readonly API: string = process.env.FASTAPI_URL as string;

  constructor(
    private readonly httpService: HttpService
  ) { }

  async recommend(studentDto: StudentDto): Promise<RecommendationsDto[]> {
    const { data } = await firstValueFrom(
      this.httpService.post<RecommendationsDto[]>(this.API, studentDto)
    );
    return data;
  }
}
