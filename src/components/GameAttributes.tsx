import type { Game } from "@/models";
import { Text, SimpleGrid, Tag } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import MetaCriticScore from "./MetaCriticScore";
import { FaTags } from "react-icons/fa6";

interface GameAttributesProps {
  game: Game;
}
const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid as="dl" columns={2} gap={10} mt={10}>
      <DefinitionItem term="Release Date">{game.released}</DefinitionItem>

      <DefinitionItem term="Metacritic Score">
        <MetaCriticScore score={game.metacritic}></MetaCriticScore>
      </DefinitionItem>

      <DefinitionItem term="Platforms">
        {game.parent_platforms.map((parent) => (
          <Text key={parent.platform.id}>{parent.platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Tags">
        {game.tags.map((tag) => (
          <Tag.Root
            key={tag.id}
            size="sm"
            colorPalette={"purple"}
            variant={"outline"}
            mx={1}
          >
            <Tag.StartElement>
              <FaTags />
            </Tag.StartElement>

            <Tag.Label>{tag.name}</Tag.Label>
          </Tag.Root>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
