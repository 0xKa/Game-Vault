import { Box, HStack, Image, Text } from "@chakra-ui/react";
import BlackLogo from "../assets/game-vault-black-icon.svg";
import PurpleLogo from "../assets/game-vault-purple-icon.svg";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}

export const NavBar = ({ onSearch }: SearchInputProps) => {
  const { colorMode } = useColorMode();

  const renderLogo = () => {
    return (
      <>
        {colorMode === "dark" ? (
          <Image src={PurpleLogo} alt="Game Vault Icon" boxSize="55px" />
        ) : (
          <Image src={BlackLogo} alt="Game Vault Icon" boxSize="55px" />
        )}
      </>
    );
  };

  return (
    <HStack padding={2} pb={7}>
      <Box
        mt={-2}
        mr={4}
        boxSize="60px"
        display="grid"
        placeItems="center"
        cursor="grabbing"
        border="1px solid"
        borderRadius={10}
        color="purple.700"
      >
        {renderLogo()}
      </Box>
      <Text
        textAlign="center"
        color={"purple.500"}
        fontFamily={'"Kumar One", serif'}
        fontWeight="500"
        letterSpacing={3}
        display={{ base: "none", md: "block" }}
        maxW="110px"
      >
        Game Vault
      </Text>
      <SearchInput onSearch={(query) => onSearch(query)} />
      <ColorModeButton size="xl" p={7} />
    </HStack>
  );
};
