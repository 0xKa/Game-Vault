import type { Genre } from "@/types";
import staticGenres from "@/data/genres-static";
import { useQuery } from "@tanstack/react-query";
import apiClient, { type RawgApiFetchResponse } from "@/services/apiClient";

const useGenres = () =>
  useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<RawgApiFetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: staticGenres,
  });

export default useGenres;
