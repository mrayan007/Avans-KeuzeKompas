import { IsInt, IsPositive } from "class-validator";

export class ModuleDto {
  @IsInt()
  @IsPositive()
  index: number;
}
