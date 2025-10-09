import { type Platform } from "@/types";
import { HStack, Icon, Box } from "@chakra-ui/react";

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
  maxVisible?: number;
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

const PlatformIconList = ({
  platforms,
  maxVisible = 10,
}: PlatformIconListProps) => {
  let visible = platforms.slice(0, maxVisible);
  const remaining = Math.max(platforms.length - visible.length, 0);

  if (remaining == 1 && visible.length > 0) {
    visible = platforms.slice(0, maxVisible + 1);
  }

  return (
    <HStack gap={2} mb={3} title={`${platforms.length} platforms`}>
      {visible.map((platform) => {
        const IconComp = platformIcons[platform.slug];
        if (!IconComp) return null;
        return (
          <Icon
            key={platform.id}
            as={IconComp}
            boxSize={5}
            color="gray.600"
            aria-label={platform.name}
          />
        );
      })}
      {remaining > 1 && (
        <Box
          as="span"
          px={2}
          py="2px"
          fontSize="xs"
          lineHeight="1"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.500"
          color="gray.400"
          title={`${remaining} more platforms`}
        >
          +{remaining}
        </Box>
      )}
    </HStack>
  );
};

export default PlatformIconList;
