import useGenres from "@/hooks/useGenres";
import React from "react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  console.log(genres);

  return <div>GenreList</div>;
};

export default GenreList;
