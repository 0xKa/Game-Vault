import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import ErrorMessage from "./ErrorMessage";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const gridSkeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <ErrorMessage message="Error loading games!" />}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} padding={10}>
        {isLoading &&
          gridSkeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
