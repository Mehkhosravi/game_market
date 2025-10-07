import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchInput } from "../hooks/useSearchInput";
import { Dropdown } from "./Dropdown";

export interface SearchingOutput {
  id: number;
  name: string;
  slug: string;
}

interface Props{
  handleSelectedGame: (gameName:string)=> void;
}

//fetching data
export const InputBox = ({handleSelectedGame}:Props) => {
  const [textInput, setTextInput] = useState("");
  
  const {
    data: allGames,
    error,
    isLoading,
  } = useSearchInput(textInput);

//handling error
  if (error) {
    console.log(error);
    return null;
  }

//trim the data to what is needed for searching
  const simplifiedGames: SearchingOutput[] =
  (allGames || []).map((game: any) => ({
    id: game.id,
    name: game.name,
    slug: game.slug,
  }));
 
//searching logic
  const filteredGames =
    textInput.length > 0
      ? simplifiedGames.filter((game) => game.slug.startsWith(textInput)) || []
      : [];
    console.log(filteredGames);

return (
      <Box width="100%" position="relative">
        <Input
          value={textInput}
          placeholder={isLoading ? "Loading..." : "Search..."}
          onChange={(e) => {
            setTextInput(e.target.value);
            console.log("Input:", e.target.value);
          }}
          onSubmit={()=> setTextInput(textInput)}
        />
        <Dropdown handleSelectedGame={(gameSlug:string)=>handleSelectedGame(gameSlug)} filteredGames={filteredGames} />
      </Box>
  );
};
