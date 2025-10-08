import type { FetchGenresResponse, Genre } from "@/types";
import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    setIsLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        if (cancelled) return;
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError || cancelled) return;
        console.error("Error fetching genres:", err);
        setError("Failed to fetch genres. Please try again later.");
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

  return { genres, error, isLoading };
};

export default useGenres;
