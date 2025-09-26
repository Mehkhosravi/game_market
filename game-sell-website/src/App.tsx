import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar"
import { GameGrid } from "./components/GameGrid";
import { SideGenres } from "./components/SideGenres";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import { PlatformSelector } from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatform";

function App() {
  const[ selectedGenre, setSelectedGenre]=useState<Genre | null>(null);
  const [ selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
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
        <SideGenres selectedGenre={selectedGenre} onSelectedGenre={(genre)=> setSelectedGenre(genre)}/>
      </GridItem>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} handleSelectedPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
