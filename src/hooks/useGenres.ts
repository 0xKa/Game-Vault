import type { Genre } from "@/models";
import staticGenres from "@/data/genres-static";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";
import { GENRES_QUERY_KEY } from "./queryKeys";
import ms from "ms";

const httpClient = new HttpClient<Genre>("/genres");

const useGenres = () =>
  useQuery<Genre[]>({
    queryKey: GENRES_QUERY_KEY,
    queryFn: () => httpClient.getAll(),
    staleTime: ms("24 Hours"),
    placeholderData: staticGenres,
  });

export default useGenres;
