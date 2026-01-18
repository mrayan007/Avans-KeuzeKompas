// URL's
import { backend } from "../axios"

export const fetchModules = async (id?: number) => {
  const url: string = id ? `/vkm/${id.toString()}` : '/vkm';
  const { data } = await backend.get(url);
  return data;
}
