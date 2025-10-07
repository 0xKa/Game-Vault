import { Badge } from "@chakra-ui/react";

interface MetaCriticScoreProps {
  score: number;
}

const MetaCriticScore = ({ score }: MetaCriticScoreProps) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge fontSize="15px" size="lg" px="4" mb="3" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default MetaCriticScore;
