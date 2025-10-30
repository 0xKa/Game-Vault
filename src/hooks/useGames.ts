import type { Game } from "@/types";
import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GAMES_QUERY_KEY } from "./queryKeys";

const httpClient = new HttpClient<Game>("/games");

const PAGE_SIZE = 20; // RAWG default

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

  return useInfiniteQuery<Game[], Error>({
    queryKey: hasParams ? [...GAMES_QUERY_KEY, params] : GAMES_QUERY_KEY,
    queryFn: async ({ pageParam = 1 }) =>
      httpClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOption,
          search: gameQuery?.searchQuery,
          page: pageParam,
          page_size: PAGE_SIZE,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < PAGE_SIZE ? undefined : allPages.length + 1;
    },
  });
};
export default useGames;
