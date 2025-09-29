import gold from "../assets/gold.webp";
import bronze from "../assets/Bronze.webp";
import silver from "../assets/silver.webp";
import { Image, type ImageProps } from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";

interface Props{
    rating: number;
}

export const EmojiIcon = ({ rating }:Props) => {
    if(rating<3)  return null;

    const emojiMap:{[key:number]: ImageProps} = {
        3:{src:bronze, alt:"Bronze: you CAN try!"},
        4:{src:silver, alt:"Silver: Recommended! you Should play this!"},
        5:{src:gold, alt:"Gold:  Exceptional!!! you MUST play!"},
    }
    
  return (
    <Tooltip content={emojiMap[rating].alt}>
        <Image {...emojiMap[rating]} boxSize="25px" borderRadius={8}  />
    </Tooltip>
  )
}
