import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        if (cancelled) return;
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError || cancelled) return;
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
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

  return { data, error, isLoading };
};

export default useData;
