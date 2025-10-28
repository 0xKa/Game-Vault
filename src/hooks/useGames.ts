import type { Game } from "@/types";
import useData from "./useData";
import type { GameQuery } from "@/App";

const useGames = (gameQuery?: GameQuery) =>
  useData<Game>({
    key: ["games"],
    endpoint: "/games",
    requestParams: {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOption,
        search: gameQuery?.searchQuery,
      },
    },
    dependencies: [gameQuery],
  });

export default useGames;
