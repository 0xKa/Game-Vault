import useGameTrailers from "@/hooks/useGameTrailers";
import ErrorMessage from "./ErrorMessage";
import { Spinner } from "@chakra-ui/react";

interface GameTrailerVideoProps {
  slug: string;
}

const GameTrailerVideo = ({ slug }: GameTrailerVideoProps) => {
  const { data: trailers, isLoading, error } = useGameTrailers(slug);

  if (isLoading) return <Spinner />;
  else if (error || !trailers)
    return <ErrorMessage message="An Error Occurred When Fetching Trailer" />;
  else if (trailers.length === 0)
    return <ErrorMessage message="No Trailer Available for This Game" />;

  return (
    <video
      src={trailers[0].data.max}
      poster={trailers[0].preview}
      width={800}
      controls
      muted
    />
  );
};

export default GameTrailerVideo;
