import { Stack } from "@chakra-ui/react";
import React from "react";

interface FiltersContainerProps {
  children?: React.ReactNode;
}

const FiltersContainer = ({ children }: FiltersContainerProps) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }} // Box-like on mobile, HStack-like on desktop
      width="50vw"
      gap={3}
      mb={-3}
      ml={10}
    >
      {children}
    </Stack>
  );
};

export default FiltersContainer;
