import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface ExpandableTextProps {
  children: string;
  limit?: number;
}
const ExpandableText = ({ children, limit = 300 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const summaryText = isExpanded ? children : children.slice(0, limit) + "...";

  return (
    <Text>
      {summaryText}
      <Button
        onClick={toggleExpand}
        ml={2}
        fontWeight={"bold"}
        size="2xs"
        variant="outline"
        colorPalette="purple"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
