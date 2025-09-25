import { SimpleGrid } from "@chakra-ui/react";
import { useGame } from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { data:games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="10px"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};
