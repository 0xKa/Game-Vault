import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GAME_SCREENSHOTS_QUERY_KEY } from "./queryKeys";
import ms from "ms";
import type { GameScreenshot } from "@/models";

const httpClient = new HttpClient<GameScreenshot>(`/games`);

const useGameScreenshots = (slug: string) => {
  return useQuery<GameScreenshot[]>({
    queryKey: [...GAME_SCREENSHOTS_QUERY_KEY, slug],
    queryFn: () => httpClient.getGameScreenshotsBySlug(slug),
    staleTime: ms("24 Hours"),
  });
};

export default useGameScreenshots;
