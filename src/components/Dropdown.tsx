import { Box } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "./ui/color-mode";

interface SearchingOutput {
  id: number;
  name: string;
  slug: string;
}

interface DropdownProps {
  filteredGames: SearchingOutput[];
  handleSelectedGame ?: (gameSlug: string)=> void
}

export const Dropdown: React.FC<DropdownProps> = ({ filteredGames,handleSelectedGame }) => {
  if (filteredGames.length === 0) return null;


   // Use Chakra’s hook to automatically pick light/dark colors
  const bgColor = useColorModeValue("white", "gray.700");
  const hoverColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("black", "white");
  
  return (
    <Box
      position="absolute"
      top="100%"    // right below the input
      left={0}
      right={0}
      bg={bgColor}
      color={textColor}
      shadow="md"
      borderRadius="md"
      zIndex={10}
      maxH="200px"
      overflowY="auto"
    >
      {filteredGames.map((game) => (
        <Box
          key={game.id}
          px={3}
          py={2}
          _hover={{ bg: hoverColor, cursor: "pointer" }}
          fontSize="sm"
          onClick={()=>{
            handleSelectedGame?.(game.slug);
            console.log(`Selected game name: ${game.slug}`)}}
        >
          {game.name}
        </Box>
      ))}
    </Box>
  );
};

