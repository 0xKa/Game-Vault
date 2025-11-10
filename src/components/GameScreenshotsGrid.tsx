import useGameScreenshots from "@/hooks/useGameScreenshots";
import { Box, SimpleGrid, Image, Spinner, Center } from "@chakra-ui/react";
import ErrorMessage from "./ErrorMessage";

interface GameScreenshotsGridProps {
  slug: string;
}

const GameScreenshotsGrid = ({ slug }: GameScreenshotsGridProps) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(slug);

  if (isLoading) return <Spinner />;
  else if (error || !screenshots)
    return (
      <ErrorMessage message="An Error Occurred When Fetching Screenshots" />
    );
  else if (screenshots.length === 0)
    return <ErrorMessage message="No Screenshots Available for This Game" />;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: screenshots.length < 2 ? 1 : 2 }}
      gap={2}
      p={1}
      bg={"transparent"}
    >
      {screenshots?.map((screenshot) => (
        <Box
          maxW="700px"
          key={screenshot.id}
          shadow="xl"
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "2xl",
          }}
          border="1px solid "
          borderColor="purple.400"
        >
          <Center>
            <Image
              src={screenshot.image}
              alt={`${slug} screenshot`}
              w={"100%"}
            />
          </Center>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshotsGrid;
