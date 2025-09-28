import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { SideGenres } from "./components/SideGenres";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import { PlatformSelector } from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatform";
import { Sortselector } from "./components/Sortselector";
import { HeadingTitle } from "./components/HeadingTitle";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      gridTemplate={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridColumn={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX="5px">
        <SideGenres
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={5} spaceY={5}>
          <HeadingTitle gameQuery={gameQuery} />
          <HStack gap={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              handleSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Sortselector
              selectedOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
