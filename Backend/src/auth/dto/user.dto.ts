// Functions
import { OmitType } from "@nestjs/swagger";

// DTO's
import { RegisterDto } from "./register.dto";

export class UserDto extends OmitType(RegisterDto, ['password'] as const) { }
