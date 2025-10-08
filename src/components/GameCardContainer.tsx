import { Box } from "@chakra-ui/react";
interface Props {
  children?: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxWidth="400px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
