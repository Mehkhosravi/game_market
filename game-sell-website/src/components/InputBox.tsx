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
const q = textInput.trim().toLowerCase();
  const filteredGames =
    q.length > 0
      ? simplifiedGames.filter((g) => g.slug.toLowerCase().startsWith(q))
      : [];

  // close when clicking outside
  useEffect(() => {
    const onDocDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  return (
    <Box ref={dropdownRef} width="fit-content" position="relative">
      <Input
        value={textInput}
        placeholder={isLoading ? "Loading..." : "Search..."}
        onFocus={() => {
          if (q && filteredGames.length > 0) setIsOpen(true);
        }}
        onChange={(e) => {
          const v = e.target.value;
          setTextInput(v);
          // open while typing if there are matches, otherwise keep closed
          setIsOpen(v.trim().length > 0);
        }}
      />
      {isOpen && filteredGames.length > 0 && (
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
