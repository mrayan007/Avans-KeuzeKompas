// Decorators
import { IsString } from "class-validator";

export class StudentDto {
  @IsString()
  interests: string;
}
