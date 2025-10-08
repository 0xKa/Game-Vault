import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageCropUrl";
import { HStack, List, Image, Text, Spinner, Box } from "@chakra-ui/react";
import { BiErrorAlt } from "react-icons/bi";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error)
    return (
      <Box padding={5}>
        <BiErrorAlt color="#aa1616ff" size={40} />
        <Text color="#aa1616ff">Error loading genres!</Text>
      </Box>
    );

  if (isLoading)
    return (
      <Spinner
        margin="50px auto auto 50px "
        color="gray.500"
        borderWidth="4px"
        size={"lg"}
      />
    );

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
