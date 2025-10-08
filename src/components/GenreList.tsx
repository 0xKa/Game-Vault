import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  console.log(genres);

  return (
    <>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
