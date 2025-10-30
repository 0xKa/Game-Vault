import type { Platform } from "@/types";
import staticPlatforms from "@/data/platforms-static";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { PLATFORMS_QUERY_KEY } from "./queryKeys";
import ms from "ms";

const httpClient = new HttpClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Platform[]>({
    queryKey: PLATFORMS_QUERY_KEY,
    queryFn: () => httpClient.getAll(),
    staleTime: ms("24 Hours"),
    placeholderData: staticPlatforms,
  });

export default usePlatforms;
