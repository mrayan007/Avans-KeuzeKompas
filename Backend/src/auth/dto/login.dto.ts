// Functions
import { PickType } from "@nestjs/swagger"

// DTO's
import { RegisterDto } from "./register.dto"

export class LoginDto extends PickType(RegisterDto,
  ['email', 'password'] as const
) { }
