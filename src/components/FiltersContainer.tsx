import { HStack } from "@chakra-ui/react";
import React from "react";

interface FiltersContainerProps {
  children?: React.ReactNode;
}

const FiltersContainer = ({ children }: FiltersContainerProps) => {
  return (
    <HStack width="50vw" mb={-3} ml={10}>
      {children}
    </HStack>
  );
};

export default FiltersContainer;
