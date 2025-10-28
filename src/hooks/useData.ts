import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { type AxiosRequestConfig } from "axios";

interface RawgApiFetchResponse<T> {
  count: number;
  results: T[];
}

interface useDataParams<T> {
  key: string[];
  endpoint: string;
  requestParams?: AxiosRequestConfig;
  dependencies?: any[];
  staleTime?: number;
  initialData?: T[];
}

const useData = <T>({
  key,
  endpoint,
  requestParams,
  staleTime = 5 * 60 * 1000,
  initialData,
}: useDataParams<T>) => {
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
    placeholderData: initialData,
  });
};

export default useData;
