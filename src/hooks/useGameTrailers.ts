import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GAME_TRAILER_QUERY_KEY } from "./queryKeys";
import ms from "ms";
import type { GameTrailer } from "@/models/gameTrailer";

const httpClient = new HttpClient<GameTrailer>(`/games`);

const useGameTrailers = (slug: string) => {
  return useQuery<GameTrailer[]>({
    queryKey: [...GAME_TRAILER_QUERY_KEY, slug],
    queryFn: () => httpClient.getGameTrailersBySlug(slug),
    staleTime: ms("24 Hours"),
  });
};

export default useGameTrailers;
