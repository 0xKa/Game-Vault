import { Button, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // this will apply for mobile screens by default
        lg: `"nav nav" "aside main"`, // this will apply for screens larger than 1024px (lg)
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem
        area={"aside"}
        bg="blue.800"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area={"main"} bg="green.800">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
