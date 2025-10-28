import type { Platform } from "@/types";
import staticPlatforms from "@/data/platforms-static";
import { useQuery } from "@tanstack/react-query";
import apiService, { type RawgApiFetchResponse } from "@/services/apiClient";

const usePlatforms = () =>
  useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiService
        .get<RawgApiFetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: staticPlatforms,
  });

export default usePlatforms;
