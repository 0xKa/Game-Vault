import Exceptional from "../../assets/rating/purple-fire.svg";
import Good from "../../assets/rating/purple-like.svg";
import Meh from "../../assets/rating/purple-meh-closed-eye.svg";
import Poor from "../../assets/rating/purple-dislike.svg";
import Awful from "../../assets/rating/purple-trash-bin.svg";
import { Image, type ImageProps } from "@chakra-ui/react";

interface RatingEmojiProps {
  rating: number;
}

const RatingEmoji = ({ rating }: RatingEmojiProps) => {
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: Exceptional, alt: "Rating: Exceptional" },
    4: { src: Good, alt: "Rating: Good" },
    3: { src: Meh, alt: "Rating: Meh" },
    2: { src: Poor, alt: "Rating: Poor" },
    1: { src: Awful, alt: "Rating: Awful" },
    0: { src: Awful, alt: "Rating: Awful" },
  };

  return <Image {...emojiMap[rating]} boxSize="24px" />;
};

export default RatingEmoji;
