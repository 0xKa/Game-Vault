import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="220px" variant="shine" />
      <Card.Title m={4} mb={2}>
        <SkeletonText />
      </Card.Title>
      <Card.Footer px={0} py={0}>
        <HStack justify="left" px={4} my={2} gap={5}>
          <SkeletonCircle size="6" />
          <SkeletonCircle size="6" />
          <SkeletonCircle size="6" />
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCardSkeleton;
