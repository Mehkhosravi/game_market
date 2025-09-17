import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid gridTemplate={{
      base: `"nav" " main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="aside" hideBelow="lg" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
