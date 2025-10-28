import type { Genre } from "@/types";
import useData from "./useData";
import genres from "@/data/genres-static";

// uncomment the line below to fetch from the static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null }); // for loading static data

const useGenres = () =>
  useData<Genre>({
    key: ["genres"],
    endpoint: "/genres",
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;
