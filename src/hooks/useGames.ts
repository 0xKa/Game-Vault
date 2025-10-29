import type { Game } from "@/types";
import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GAMES_QUERY_KEY } from "./queryKeys";

const httpClient = new HttpClient<Game>("/games");

const useGames = (gameQuery?: GameQuery) => {
  const params = {
    genres: gameQuery?.genre?.slug,
    parent_platforms: gameQuery?.platform?.slug,
    ordering: gameQuery?.sortOption || undefined,
    search: gameQuery?.searchQuery?.trim() || undefined,
  };

  const hasParams = Object.values(params).some(
    (v) => v !== undefined && v !== null && v !== ""
  );

  return useQuery<Game[]>({
    queryKey: hasParams ? [...GAMES_QUERY_KEY, params] : GAMES_QUERY_KEY,
    queryFn: () =>
      httpClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOption,
          search: gameQuery?.searchQuery,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGames;
