// URL's
import { backend } from "../axios"

// DTO's
import { StudentDto } from "../dto/student.dto"

export const fetchRecommendations = async (interests: string) => {
  const studentDto = new StudentDto(interests);
  const { data } = await backend.post('/recommend', studentDto);
  return data;
}
