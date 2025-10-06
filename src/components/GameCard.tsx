import type { Game } from "@/types";
import { Card, Image } from "@chakra-ui/react";

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
      </Card.Root>
    </>
  );
};

export default GameCard;
