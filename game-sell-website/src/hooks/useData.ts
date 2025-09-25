import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchingResponse<T>{
    count:number;
    results: T[]
}

export const useData = <T>(endpoint:string) => {
  const [ data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchingResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);
  return { data, error, isLoading };
};