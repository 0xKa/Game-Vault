import { Grid, GridItem } from "@chakra-ui/react";
import FiltersContainer from "../FiltersContainer";
import GameGrid from "../GameGrid";
import GameHeading from "../GameHeading";
import GenreList from "../GenreList";
import PlatformSelector from "../PlatformSelector";
import SortSelector from "../SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // will apply for mobile screens by default
        lg: `"aside main"`, // for screens larger than 1024px (lg)
      }}
      templateColumns={{ base: "1fr", lg: "180px 1fr" }} // sidebar will be 180px wide on large screens
    >
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
};

export default HomePage;
