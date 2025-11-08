import type { Game } from "@/types";
import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCroppedImageUrl from "@/services/imageCropUrl";
import noImagePlaceholder from "@/assets/no-image.svg";
import RatingEmoji from "./RatingEmoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root display="flex" flexDir="column" h="100%" shadow="lg">
      <Box borderTopRadius={5} overflow="hidden">
        <Image
          src={
            game.background_image
              ? getCroppedImageUrl(game.background_image, 600, 400)
              : noImagePlaceholder
          }
          alt={game.name}
          height={200}
          width="100%"
          objectFit={game.background_image ? "cover" : "contain"}
          bg={game.background_image ? "transparent" : "blackAlpha.400"}
        />
      </Box>

      <Card.Body mt="auto" px={0} py={0}>
        <HStack justify="space-between" align="center" w="100%" px={4} mt={3}>
          <Box flex="1" minW={0} overflow="hidden">
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
              maxVisible={4}
            />
          </Box>
          <MetaCriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>

      <Card.Footer flex="1" display="flex" alignItems="center" px={3} pb={5}>
        <Box flex="1" minW={0}>
          <Card.Title fontSize="2xl" title={game.name}>
            {game.name}
          </Card.Title>
        </Box>
        <Box ml="auto">
          <RatingEmoji rating={game.rating_top} />
        </Box>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
