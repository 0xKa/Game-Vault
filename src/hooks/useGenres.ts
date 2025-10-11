import type { Genre } from "@/types";
import useData from "./useData";
import genres from "@/data/genres-static";

const useGenres = () => ({ data: genres, isLoading: false, error: null }); // for loading static data

// uncomment the line below to fetch from the API
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
