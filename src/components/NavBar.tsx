import { Box, HStack, Image, Text } from "@chakra-ui/react";
import BlackLogo from "../assets/game-vault-black-icon.svg";
import PurpleLogo from "../assets/game-vault-purple-icon.svg";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  const { colorMode } = useColorMode();

  const renderLogo = () => {
    return (
      <>
        {colorMode === "dark" ? (
          <Image src={PurpleLogo} alt="Game Vault Icon" boxSize="60px" />
        ) : (
          <Image src={BlackLogo} alt="Game Vault Icon" boxSize="60px" />
        )}
      </>
    );
  };

  return (
    <HStack padding={2} pb={7}>
      <Box pr={{ base: 5, md: 0 }} cursor="grabbing">
        {renderLogo()}
      </Box>
      <Text
        fontWeight={"semibold"}
        px={4}
        color={"purple.600"}
        display={{ base: "none", md: "inline-flex" }}
      >
        Game Vault
      </Text>
      <SearchInput />
      <ColorModeButton size="xl" p={7} />
    </HStack>
  );
};
