import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { type AxiosRequestConfig } from "axios";

interface RawgApiFetchResponse<T> {
  count: number;
  results: T[];
}

interface useDataParams {
  key: string[];
  endpoint: string;
  requestParams?: AxiosRequestConfig;
  dependencies?: any[];
  staleTime?: number;
}

const useData = <T>({
  key,
  endpoint,
  requestParams,
  staleTime = 5 * 60 * 1000,
}: useDataParams) => {
  const fetchData = async () => {
    const response = await apiClient.get<RawgApiFetchResponse<T>>(
      endpoint,
      requestParams
    );
    return response.data.results;
  };

  return useQuery<T[], Error>({
    queryKey: requestParams ? [...key, requestParams] : key,
    queryFn: fetchData,
    staleTime: staleTime,
  });
};

export default useData;
