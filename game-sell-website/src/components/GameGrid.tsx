import { SimpleGrid } from "@chakra-ui/react";
import { useGame } from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import type { GameQuery } from "../App";
import { NotFoundCard } from "./NotFoundCard";

interface Props{
  gameQuery: GameQuery;
}
export const GameGrid = ({gameQuery}:Props) => {
  const { data:games, error, isLoading } = useGame(gameQuery);
  const notFound = !isLoading && (!games || games.length === 0);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="5px"
        justifyItems="start" 
        gap="7px"
      >
      {isLoading &&
      skeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}
      {notFound && <NotFoundCard />}

      {!isLoading &&
        games &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
