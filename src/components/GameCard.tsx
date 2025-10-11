import type { Game } from "@/types";
import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCroppedImageUrl from "@/services/imageCropUrl";
import noImagePlaceholder from "@/assets/no-image.svg";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const iconMax = useBreakpointValue<number>({ base: 7, md: 7, lg: 4, xl: 7 }) ?? 5;   // how many icons to show per grid breakpoint

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
          objectFit="cover"
          height={200}
          width="100%"
        />
      </Box>

      <Box flex="1" display="flex" alignItems="center" px={3} py={5}>
        <Card.Title fontSize="2xl" title={game.name}>
          {game.name}
        </Card.Title>
      </Box>

      <Card.Footer mt="auto" px={0} py={0}>
        <HStack justify="space-between" align="center" w="100%" px={4}>
          <Box flex="1" minW={0} overflow="hidden">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              maxVisible={4}
            />
          </Box>
          <MetaCriticScore score={game.metacritic} />
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
