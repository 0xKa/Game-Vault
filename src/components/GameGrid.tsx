import useGames from "@/hooks/useGames";
import { Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import ErrorMessage from "./ErrorMessage";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
import React from "react";

interface GameGridProps {
  gameQuery?: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const gridSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(games);

  if (error) return <ErrorMessage message="Error loading games!" />;

  const renderSekeletons = () => {
    return gridSkeletons.map((i) => (
      <GameCardContainer key={i}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));
  };

  const renderGames = () => {
    return games?.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      gap={8}
      padding={10}
      alignItems="stretch"
    >
      {isLoading ? renderSekeletons() : renderGames()}

      {hasNextPage && (
        <Button variant={"surface"} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </SimpleGrid>
  );
};

export default GameGrid;
