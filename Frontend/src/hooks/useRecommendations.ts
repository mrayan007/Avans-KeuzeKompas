// Services
import { fetchRecommendations } from "../api/services/recommendations.fetch";

// Querying
import { useMutation } from "@tanstack/react-query";

export const useRecommendations = () => {
  return useMutation({
    mutationFn: fetchRecommendations,
    onMutate: () => console.log('loading'),
    onError: async () => console.log('error'),
  });
}
