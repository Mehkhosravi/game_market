import type { GameQuery } from "../App";
import { useData } from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  slug:string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
export const useGame = (gameQuery: GameQuery) =>{
  if (!gameQuery) return { data: [], error: null, isLoading: false };
  return(useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  ))
}
