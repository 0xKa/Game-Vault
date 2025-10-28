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
  initialData?: any[];
}

const useData = <T>({
  key,
  endpoint,
  requestParams,
  staleTime = 5 * 60 * 1000,
  initialData,
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
    placeholderData: initialData, // placeholder data shown while loading, we can use initialData instead of placeholderData if we want to cache it
  });
};

export default useData;
