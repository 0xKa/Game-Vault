import { type Platform } from "@/types";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { VscTerminalLinux } from "react-icons/vsc";

interface PlatformIconListProps {
  platforms: Platform[];
}

const platformIcons: Partial<Record<string, IconType>> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  linux: VscTerminalLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  mac: FaApple,
  nintendo: BsNintendoSwitch,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack gap={3} padding="10px 0 20px">
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
