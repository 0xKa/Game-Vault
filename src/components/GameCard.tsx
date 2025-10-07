import type { Game } from "@/types";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <Card.Title m={4} fontSize="2xl">
          {game.name}
        </Card.Title>

        <Card.Footer px={0} py={0}>
          <HStack justify="space-between" w="100%" px={4} mr={0}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCriticScore score={game.metacritic} />
          </HStack>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default GameCard;
