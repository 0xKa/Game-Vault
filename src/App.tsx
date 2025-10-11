import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Platform, Genre } from "./types";
import PlatformSelector from "./components/PlatformSelector";
import FiltersContainer from "./components/FiltersContainer";
import SortOrderSelector from "./components/SortOrderSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOption: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        />
      </GridItem>

      <GridItem area={"main"}>
        <FiltersContainer>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            selectedSort={gameQuery.sortOption}
            OnSortSelect={(option) =>
              setGameQuery({ ...gameQuery, sortOption: option })
            }
          />

          <SortOrderSelector />
        </FiltersContainer>
        <GameGrid key={gameQuery.genre?.id ?? "all"} gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
