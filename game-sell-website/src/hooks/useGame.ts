import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    slug:string;
    name:string;
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    platforms:{platform:Platform}[];
    metacritic: number
}
interface FetchingResponseData{
    count:number;
    results:Game[];
}

export const useGame = () => {
    const[ games,setGames ] = useState<Game[]>([]);
    const[ error,setError ] = useState("");
    const[ isLoading,setLoading ]=useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchingResponseData>("/games",{signal:controller.signal} )
        .then(res=>{
            setGames(res.data.results);
            setTimeout(() => setLoading(false), 500)
        })
        .catch(err=>{
            if (err instanceof CanceledError) return;
            setLoading(false);
            setError(err.message)})

     return ()=> controller.abort();
    }, []);
    return {games, error, isLoading};
}