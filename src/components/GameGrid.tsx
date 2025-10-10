import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import ErrorMessage from "./ErrorMessage";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";

interface GameGridProps {
  gameQuery?: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const gridSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {error && <ErrorMessage message="Error loading games!" />}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={8}
        padding={10}
        alignItems="stretch"
      >
        {isLoading
          ? gridSkeletons.map((i) => (
              <GameCardContainer key={i}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
