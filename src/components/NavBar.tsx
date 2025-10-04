import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-vault-icon.svg";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Game Vault Icon" boxSize="60px" />
      <Text>Game Vault</Text>
    </HStack>
  );
};
