import type { Game } from "@/types";
import useData from "./useData";
import type { GameQuery } from "@/App";

const useGames = (gameQuery?: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOption,
      },
    },
    [gameQuery]
  );

export default useGames;
