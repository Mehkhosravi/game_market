import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar"
import { GameGrid } from "./components/GameGrid";
import { SideGenres } from "./components/SideGenres";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import { PlatformSelector } from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatform";


export interface GameQuery{
  genre: Genre|null;
  platform: Platform|null
}
function App() {
  const[ gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery);
  return(
    <Grid gridTemplate={{
      base: `"nav" " main"`,
      lg: `"nav nav" "aside main"`
    }}
    gridColumn={{
      base: "1fr",
      lg: "200px 1fr"
    }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX="5px">
        <SideGenres selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=> setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform={gameQuery.platform} handleSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <GameGrid  gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
