import { Box, HStack, Image, Text } from "@chakra-ui/react";
import PurpleLogo from "../assets/game-vault-purple-icon.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const { colorMode } = useColorMode();

  return (
    <HStack padding={2} pb={7}>
      <Box mt={-2} boxSize="60px" display="grid" placeItems="center">
        <Link to="/">
          <Image src={PurpleLogo} alt="Game Vault Icon" boxSize="55px" />
        </Link>
      </Box>

      <Text
        textAlign="center"
        color={"#805AD5"}
        fontFamily={'"Kumar One", sans-serif'}
        fontWeight="900"
        letterSpacing={3}
        display={{ base: "none", md: "block" }}
        maxW="110px"
        mr={10}
      >
        <Link to="/">Game Vault</Link>
      </Text>
      <SearchInput />
      <ColorModeButton size="xl" p={7} />
    </HStack>
  );
};

export default NavBar;
