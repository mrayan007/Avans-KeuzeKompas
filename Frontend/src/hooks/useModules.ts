// Querying
import { useQuery } from "@tanstack/react-query"

// Services
import { fetchModules } from "../api/services/modules.fetch"

export const useModules = (id?: number) => {
  return useQuery({
    queryKey: ['vkm', id],
    queryFn: () => fetchModules(id),
  });
}
