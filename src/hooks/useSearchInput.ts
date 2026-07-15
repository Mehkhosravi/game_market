import { useData } from "./useData";

interface SearchingOutput{
  id: number;
  name: string;
  slug: string
}

export const useSearchInput = (textInput:string) =>{
  return(useData<SearchingOutput[]>(
  "/games",
  {
    params: {
      search: textInput,
      page_size: 15,
      search_exact: true,
      search_precise: true
    },
  },
  [textInput]
)
)}


  //Testing purpose:
  //const allGames=[
  //     {id: 1, name: "Zeldaaa", slug: "zelda"},
  //     {id: 2, name: 'Mario Switch 1', slug: 'mario switch'},
  //     {id: 3, name: 'Little Nightmares', slug: 'little nightmares'},
  //     {id: 4, name: 'Inside', slug: 'inside'},
  //     {id: 5, name: 'GTA', slug: 'gta'},
  // ];