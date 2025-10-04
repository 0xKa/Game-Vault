import { HStack, Image, Text } from "@chakra-ui/react";
import BlackLogo from "../assets/game-vault-black-icon.svg";
import WhiteLogo from "../assets/game-vault-white-icon.svg";
import { useColorMode } from "./ui/color-mode";

export const NavBar = () => {
  const { colorMode } = useColorMode();

  const renderLogo = () => {
    return (
      <>
        {colorMode === "dark" ? (
          <Image src={WhiteLogo} alt="Game Vault Icon" boxSize="60px" />
        ) : (
          <Image src={BlackLogo} alt="Game Vault Icon" boxSize="60px" />
        )}
      </>
    );
  };

  return (
    <HStack>
      {renderLogo()}
      <Text>Game Vault</Text>
    </HStack>
  );
};
