import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `
    ${gameQuery?.genre?.name || ""}
    ${gameQuery?.platform?.name || ""} Games
    ${
      gameQuery?.sortOption
        ? `- Sorted by ${
            gameQuery.sortOption.startsWith("-")
              ? gameQuery.sortOption.slice(1) + " (descending)"
              : gameQuery.sortOption
          }`
        : ""
    }`;

  return (
    <Heading
      as="h1"
      m={5}
      ml={10}
      fontSize="4xl"
      fontFamily="Kumar One"
      color="purple.500"
      lineHeight="50px"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
