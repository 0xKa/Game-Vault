import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box>
      <Heading
        as="dt"
        fontSize={"md"}
        fontWeight="bold"
        color={"purple.400"}
        mb={0.25}
      >
        {term}
      </Heading>
      <Box as="dd" pl={4}>
        {children}
      </Box>
    </Box>
  );
};

export default DefinitionItem;
