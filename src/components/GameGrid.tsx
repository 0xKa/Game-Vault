import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import ErrorMessage from "./ErrorMessage";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();

  // console.log(games);

  if (error) return <ErrorMessage message="Error loading games!" />;

  const skeletonKeys = [1, 2, 3, 4, 5, 6, 7, 8];
  const renderSkeletons = () =>
    skeletonKeys.map((i) => (
      <GameCardContainer key={`skeleton-${i}`}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));

  const renderGames = () =>
    games?.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </React.Fragment>
    ));

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={null}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={8}
        padding={10}
        alignItems="stretch"
      >
        {isLoading ? renderSkeletons() : renderGames()}
        {isFetchingNextPage && renderSkeletons()}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
