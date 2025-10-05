import type { FetchGamesResponse, Game } from "@/types";
import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.error("Error fetching games:", error);
        setError("Failed to fetch games. Please try again later.");
      });
  }, []);

  return { games, error };
};

export default useGames;
