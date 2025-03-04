import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";
import GameDetails from "./components/GameDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Grid templateAreas={`"nav nav" "side main"`}>
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"side"}></GridItem>
        <GridItem area={"main"} justifyContent={"flex-start"}>
          <Routes>
            <Route path="/" element={
              <SimpleGrid minChildWidth={280} gap={6} width={"100%"} justifyContent={"center"} p={6}>
                <GameCard />
              </SimpleGrid>
            } />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </GridItem>
      </Grid>
      <Footer />
    </Router>
  );
}

export default App;