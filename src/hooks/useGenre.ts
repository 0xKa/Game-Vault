import useGenres from "./useGenres";

const useGenre = (id: number) => {
  const { data: Genres } = useGenres();
  return Genres?.find((p) => p.id === id);
};
export default useGenre;
