import { Box, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSearchInput } from "../hooks/useSearchInput";
import { Dropdown } from "./Dropdown";

export interface SearchingOutput {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  handleSelectedGame: (gameName: string) => void;
}

//fetching data
export const InputBox = ({ handleSelectedGame }: Props) => {
  const [textInput, setTextInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { data: allGames, error, isLoading } = useSearchInput(textInput);

  //handling error
  if (error) {
    console.log(error);
    return null;
  }

  //trim the data to what is needed for searching
  const simplifiedGames: SearchingOutput[] = (allGames || []).map(
    (game: any) => ({
      id: game.id,
      name: game.name,
      slug: game.slug,
    })
  );

  //searching logic
  const filteredGames =
    textInput.length > 0
      ? simplifiedGames.filter((game) => game.slug.startsWith(textInput)) || []
      : [];
  console.log(filteredGames);

useEffect(() => {
    if (filteredGames.length > 0 && textInput.trim() !== "") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [filteredGames, textInput]);

  // ✅ Clean "close dropdown" function
  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // ✅ Attach / remove event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <Box ref={dropdownRef} width="-moz-fit-content" position="relative">
      <Input
        value={textInput}
        placeholder={isLoading ? "Loading..." : "Search..."}
        onChange={(e) => {
          setTextInput(e.target.value);
          console.log("Input:", e.target.value);
        }}
        //onSubmit={()=> setTextInput(textInput)}
      />
      {isOpen && (
        <Dropdown
          handleSelectedGame={(gameSlug: string) =>{handleSelectedGame(gameSlug);
            setIsOpen(false);
            setTextInput("");
          }
            
          }
          filteredGames={filteredGames}
        />
      )}
    </Box>
  );
};
