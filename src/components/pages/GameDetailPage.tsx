import useGameDetails from "@/hooks/useGameDetails";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import TextOverlaySpinner from "../TextOverlaySpinner";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameTrailerVideo from "../GameTrailerVideo";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);
  console.log("game", game);

  if (isLoading) return <TextOverlaySpinner />;

  if (error || !game)
    return (
      <ErrorMessage message="An Error Occurred When Fetching Game Details" />
    );

  return (
    <>
      <SimpleGrid columns={2} gap={20}>
        <Box>
          <Heading as="h1" size="2xl">
            {game.name}
          </Heading>
          <ExpandableText limit={1100}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Box>

        <Box>
          <Heading size="2xl" mb={5}>
            Game Trailer
          </Heading>
          <GameTrailerVideo slug={slug} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
