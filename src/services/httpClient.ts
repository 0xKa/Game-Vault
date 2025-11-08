import type { AxiosRequestConfig } from "axios";
import apiClient, { type RawgApiFetchResponse } from "./apiClient";

class HttpClient<T> {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config?: AxiosRequestConfig) {
    const res = await apiClient.get<RawgApiFetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data.results;
  }

  async getBySlug(id: number | string) {
    const res = await apiClient.get<T>(`${this.endpoint}/${id}`);
    return res.data;
  }
}
export default HttpClient;
