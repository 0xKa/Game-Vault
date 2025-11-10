import { Stack } from "@chakra-ui/react";
import React from "react";

interface FiltersContainerProps {
  children?: React.ReactNode;
}

const FiltersContainer = ({ children }: FiltersContainerProps) => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      w={{ base: "100%", lg: "50vw" }}
      gap={3}
      mb={-3}
      mx={{ base: "auto", lg: 0 }}
      ml={{ base: 0, lg: 10 }}
      px={{ base: 10, lg: 0 }}
      alignSelf={{ base: "center", lg: "flex-start" }}
      alignItems={{ base: "center", lg: "stretch" }}
    >
      {children}
    </Stack>
  );
};

export default FiltersContainer;
