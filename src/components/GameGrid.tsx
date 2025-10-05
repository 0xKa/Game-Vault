import apiClient from "@/services/apiClient";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/gamess")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        setError("Failed to fetch games. Please try again later.");
      });
  }, []);

  return (
    <div>
      {error && <Text className="error">{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
