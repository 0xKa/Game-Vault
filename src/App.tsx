import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import FiltersContainer from "./components/FiltersContainer";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // will apply for mobile screens by default
        lg: `"nav nav" "aside main"`, // for screens larger than 1024px (lg)
      }}
      templateColumns={{ base: "1fr", lg: "180px 1fr" }} // sidebar will be 180px wide on large screens
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>

      <GridItem area={"main"}>
        <GameHeading />
        <FiltersContainer>
          <PlatformSelector />
          <SortSelector />
        </FiltersContainer>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
