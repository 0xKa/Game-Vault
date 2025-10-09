import { Badge } from "@chakra-ui/react";

interface MetaCriticScoreProps {
  score: number;
}

const MetaCriticScore = ({ score }: MetaCriticScoreProps) => {
  const getColorPalette = (score: number) => {
    if (score > 75) return "green";
    if (score > 50) return "yellow";
    return "red";
  };

  const colorPalette = score == null ? "gray" : getColorPalette(score);
  const displayScore = score ?? "N/A";

  return (
    <Badge fontSize="15px" size="lg" px="4" mb="3" colorPalette={colorPalette}>
      {displayScore}
    </Badge>
  );
};

export default MetaCriticScore;
