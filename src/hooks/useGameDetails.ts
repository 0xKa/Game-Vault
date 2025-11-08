import type { Game } from "@/models";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GAMES_QUERY_KEY } from "./queryKeys";
import ms from "ms";

const httpClient = new HttpClient<Game>(`/games`);
const useGameDetails = (slug: string) => {
  return useQuery<Game>({
    queryKey: [...GAMES_QUERY_KEY, slug],
    queryFn: () => httpClient.getBySlug(slug),
    staleTime: ms("24 Hours"),
  });
};

export default useGameDetails;
