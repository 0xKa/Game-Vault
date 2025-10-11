import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageCropUrl";
import { HStack, List, Image, Spinner, Link, Box } from "@chakra-ui/react";
import ErrorMessage from "./ErrorMessage";
import type { Genre } from "@/types";

interface GenreListProps {
  onSelectGenre?: (genre: Genre | null) => void;
  selectedGenre?: Genre | null;
}

const LINK_SELECTED_STYLE = {
  fontFamily: "Kumar One" as const,
  fontWeight: "bold" as const,
  colorPalette: "purple" as const,
  textDecorationColor: "purple" as const,
  variant: "underline" as const,
};
const LINK_DEFAULT_STYLE = {
  fontFamily: "Kumar One" as const,
  fontWeight: "normal" as const,
  colorPalette: "gray" as const,
  variant: "plain" as const,
  fontSize: "sm" as const,
};
const ROW_PROPS = { gap: 3 as const, px: 3 as const, py: 2 as const };

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data: genres = [], error, isLoading } = useGenres();
  const selectedId = selectedGenre?.id ?? null;

  if (error) return <ErrorMessage message="Error loading genres!" />;

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <Spinner color="gray.500" borderWidth="4px" size="lg" />
      </Box>
    );
  }

  return (
    <List.Root variant="plain" m={0} p={0}>
      <List.Item m={0}>
        <HStack {...ROW_PROPS}>
          <Link
            onClick={() => onSelectGenre?.(null)}
            fontSize="lg"
            {...(selectedId === null
              ? LINK_SELECTED_STYLE
              : LINK_DEFAULT_STYLE)}
          >
            All
          </Link>
        </HStack>
      </List.Item>

      {genres.map((genre) => {
        const isSelected = genre.id === selectedId;
        return (
          <List.Item key={genre.id} m={0}>
            <HStack {...ROW_PROPS}>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
              />
              <Link
                onClick={() => onSelectGenre?.(genre)}
                fontSize="lg"
                {...(isSelected ? LINK_SELECTED_STYLE : LINK_DEFAULT_STYLE)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default GenreList;
