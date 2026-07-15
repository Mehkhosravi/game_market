import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGame";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getImageCropped from "../services/crop-image";
import { EmojiIcon } from "./EmojiIcon";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getImageCropped(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platform={game.platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent="space-between">
          <Heading fontSize={game.name.length > 20 ? "md" : "xl"}>
            {game.name}
          </Heading>
          <EmojiIcon rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};
