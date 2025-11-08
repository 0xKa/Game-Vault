import useGameDetails from "@/hooks/useGameDetails";
import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import TextOverlaySpinner from "../TextOverlaySpinner";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);

  console.log(game);
  if (isLoading) return <TextOverlaySpinner />;

  if (error || !game)
    return (
      <ErrorMessage message="An Error Occurred When Fetching Game Details" />
    );

  return (
    <>
      <Heading as="h1">{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
