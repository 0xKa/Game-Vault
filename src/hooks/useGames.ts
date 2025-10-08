import type { FetchGamesResponse, Game } from "@/types";
import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    setIsLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        if (cancelled) return;
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError || cancelled) return;
        console.error("Error fetching games:", err);
        setError("Failed to fetch games. Please try again later.");
      })
      .finally(() => {
        if (cancelled) return;
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
};

export default useGames;
