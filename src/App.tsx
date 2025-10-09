import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./types";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenreList
          onSelectGenre={(genre) => {
            setSelectedGenre(genre);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid
          key={selectedGenre?.id ?? "all"}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
