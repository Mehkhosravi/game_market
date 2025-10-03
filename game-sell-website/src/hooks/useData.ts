import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";


interface FetchingResponse<T>{
  count:number;
  results: T[]
}

export const useData = <T>(endpoint:string, requestConfig ?: AxiosRequestConfig, deps?:any[]) => {
  const [ data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchingResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, deps? [...deps]: []);
  return { data, error, isLoading };
};