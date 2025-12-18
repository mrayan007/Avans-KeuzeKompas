export interface Recommendation {
  index: number;
  module_title: string;
  location: string;
  final_score: number;
  content_similarity: number;
  constraint_score: number;
  popularity_score: number;
  reasons: {
    location: string,
    studie_credits: string,
    level: string,
    difficulty: string
  };
}
