import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageCropUrl";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} m="-10px">
          <HStack gap={3} padding={5}>
            <Image
              src={getCroppedImageUrl(genre.image_background, 600, 400)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
