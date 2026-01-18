// URL
import { backend } from "../axios";

// DTO
import { LoginDto } from "../dto/login.dto"

export const logIn = async (email: string, password: string) => {
  const dto = new LoginDto(email, password);
  return await backend.post('/auth/signin', dto);
}
