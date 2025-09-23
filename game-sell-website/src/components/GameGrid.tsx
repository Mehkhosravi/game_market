import { SimpleGrid } from "@chakra-ui/react";
import { useGame } from "../hooks/useGame";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" gap="10px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
