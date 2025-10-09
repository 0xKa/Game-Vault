import { Box, HStack, Text } from "@chakra-ui/react";
import { TbFileSad } from "react-icons/tb";

interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <Box padding={5}>
      <HStack>
        <TbFileSad color="#DC3545" size={40} />
        <Text color="#DC3545">{message || "An error occurred!"}</Text>
      </HStack>
    </Box>
  );
};

export default ErrorMessage;
