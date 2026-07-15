import React, { useState } from "react";
import {
  Menu,
  Portal,
  Input,
  Box,
} from "@chakra-ui/react";
import { useSearchInput } from "../hooks/useSearchInput";
import { InputBox } from "./InputBox";

interface SearchingOutput {
  id: number;
  name: string;
  slug: string;
}

interface InputBoxProps {
  onGameSelected: (slug: string) => void;
}

export const SearchingBox: React.FC<InputBoxProps> = ({ onGameSelected }) => {
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
    <Menu.Root defaultOpen={filteredGames.length > 0}>
      {/* Trigger the dropdown as a child of Menu */}
      <Menu.Trigger asChild>
        <Box>
          <Input
          value={textInput}
          placeholder={isLoading ? "Loading..." : "Search..."}
          onChange={(e) => {
            setTextInput(e.target.value);
            console.log("Input:", e.target.value);
          }}
          onSubmit={()=> setTextInput(textInput)}
            />
        </Box>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            maxH="200px"
            minW="10rem"
            overflowY="auto"
            bg="white"
            shadow="md"
            borderRadius="md"
          >
            {filteredGames.map((game) => (
              <Menu.Item
                key={game.id}
                value={game.slug}
                onSelect={()=>{
                    setTextInput(game.name);
                    onGameSelected(game.slug)}
                }
              >
                {game.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
