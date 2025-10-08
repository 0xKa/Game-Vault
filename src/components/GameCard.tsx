import type { Game } from "@/types";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCroppedImageUrl from "@/services/imageCropUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} />
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
  );
};

export default GameCard;
