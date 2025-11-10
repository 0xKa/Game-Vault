import useGameQueryStore from "@/stores/gamesStore";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genre = useGameQueryStore((s) => s.gameQuery.genre);
  const platform = useGameQueryStore((s) => s.gameQuery.platform);
  const sortOption = useGameQueryStore((s) => s.gameQuery.sortOption);

  const heading = `
  ${platform?.name || ""}
  ${genre?.name || ""} Games
    ${
      sortOption
        ? `- Sorted by ${
            sortOption.startsWith("-")
              ? sortOption.slice(1) + " (descending)"
              : sortOption
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
      color="#805AD5"
      lineHeight="50px"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
