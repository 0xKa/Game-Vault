import { Box } from "@chakra-ui/react";
interface Props {
  children?: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box w="100%" maxWidth="400px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
