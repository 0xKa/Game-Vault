import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageCropUrl";
import { HStack, List, Image, Spinner, Link } from "@chakra-ui/react";
import ErrorMessage from "./ErrorMessage";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return <ErrorMessage message="Error loading genres!" />;

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
            <Link textDecorationColor="red.500" fontSize="lg">
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
