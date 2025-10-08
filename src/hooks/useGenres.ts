import type { Genre } from "@/types";
import useData from "./useData";

const useGenres = () => useData<Genre>("/sgenres");

export default useGenres;
