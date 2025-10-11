import type { Platform } from "@/types";
import useData from "./useData";
import platforms from "@/data/platforms-static";

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null }); // for loading static data

// uncomment the line below to fetch from the API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
