import { useEffect, useRef, useState } from "react";
import { useSearchInput } from "../hooks/useSearchInput";
import { Dropdown } from "./Dropdown";
import { LuSearch } from "react-icons/lu";

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

  // close the Dropdown menu when clicking outside
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
    <div ref={dropdownRef} style={{ position: "relative", width: "fit-content" }}>
      {/* Wrapper for the input and the icon */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          type="text"
          value={textInput}
          placeholder={isLoading ? "Loading..." : "Search..."}
          onFocus={() => {
            if (q && filteredGames.length > 0) setIsOpen(true);
          }}
          onChange={(e) => {
            const v = e.target.value;
            setTextInput(v);
            setIsOpen(v.trim().length > 0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSelectedGame(textInput);
          }}
          style={{
            width: "250px",
            padding: "8px 36px 8px 12px", // room on the right for the icon
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            outline: "none",
          }}
        />

        {/* Icon inside input box (positioned absolutely) */}
        <button
          onClick={()=>handleSelectedGame(textInput)}
          aria-label="Search"
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <LuSearch size={18} color="#555" />
        </button>
      </div>
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
    </div>
  );
};
