import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  console.log("Games length:", games.length);
  if (games.length > 0) {
    console.log("First game:", games[0]);
    console.log("Parent platforms:", games[0].parent_platforms);
  }

  return (
    <div>
      {error && <Text className="error">{error}</Text>}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} padding={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
