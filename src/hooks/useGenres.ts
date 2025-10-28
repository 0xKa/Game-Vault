import type { Genre } from "@/types";
import useData from "./useData";

// uncomment the line below to fetch from the static data
// import genres from "@/data/genres-static";
// const useGenres = () => ({ data: genres, isLoading: false, error: null }); // for loading static data

const useGenres = () =>
  useData<Genre>({
    key: ["genres"],
    endpoint: "/genres",
    staleTime: 24 * 60 * 60 * 1000,
  }); // fresh for 24 hours (staleTime)

export default useGenres;
