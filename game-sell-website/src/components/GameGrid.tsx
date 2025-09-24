import { SimpleGrid } from "@chakra-ui/react";
import { useGame } from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons=[1,2,3,4,5,6,7,8];
  return (
    <>
      
      {error && <text>{error}</text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding="10px" gap="10px">
        {isLoading?
        skeletons.map(skeleton=> <GameCardSkeleton key={skeleton} />)
        :games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
