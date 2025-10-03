import platforms from "../data/platforms";
export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export const usePlatform= ()=>({data: platforms, error: null, isLoading: false});