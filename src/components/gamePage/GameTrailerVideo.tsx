import useGameTrailers from "@/hooks/useGameTrailers";
import ErrorMessage from "../utils/ErrorMessage";
import { Box, Center, Spinner } from "@chakra-ui/react";

interface GameTrailerVideoProps {
  slug: string;
}

const GameTrailerVideo = ({ slug }: GameTrailerVideoProps) => {
  const { data: trailers, isLoading, error } = useGameTrailers(slug);

  if (isLoading) return <Spinner />;
  else if (error || !trailers)
    return <ErrorMessage message="An Error Occurred When Fetching Trailer" />;
  else if (trailers.length === 0) return null;
  // return <ErrorMessage message="No Trailer Available for This Game" />;

  return (
    <Box p={0.5} border="1px solid " borderColor="purple.400">
      <Center>
        <video
          src={trailers[0].data.max}
          poster={trailers[0].preview}
          controls
          muted
        />
      </Center>
    </Box>
  );
};

export default GameTrailerVideo;
