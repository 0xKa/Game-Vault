import { type Platform } from "@/types/platform";
import { HStack, Icon, Text } from "@chakra-ui/react";

import {
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const platformIcons: Partial<Record<string, IconType>> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  linux: FaLinux,
  android: FaAndroid,
  ios: FaApple,
  mac: SiMacos,
  nintendo: BsNintendoSwitch,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack gap={3} padding="10px 15px 20px">
      {platforms.map((platform) => (
        <Icon
          size="lg"
          color="gray.600"
          as={platformIcons[platform.slug]}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
