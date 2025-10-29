import type { Genre } from "@/types";
import staticGenres from "@/data/genres-static";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "@/services/httpClient";

const httpClient = new HttpClient<Genre>("/genres");

const useGenres = () =>
  useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: () => httpClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: staticGenres,
  });

export default useGenres;
