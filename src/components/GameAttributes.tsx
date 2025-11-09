import type { Game } from "@/models";
import { Text, SimpleGrid } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import ExpandableText from "./ExpandableText";
import MetaCriticScore from "./MetaCriticScore";

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

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Tags">
        <ExpandableText limit={50}>
          {game.tags.map((tag) => tag.name).join(", ")}
        </ExpandableText>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
