import { Box } from "@chakra-ui/react";
import React from "react";

interface SearchingOutput {
  id: number;
  name: string;
  slug: string;
}

interface DropdownProps {
  filteredGames: SearchingOutput[];
}

export const Dropdown: React.FC<DropdownProps> = ({ filteredGames }) => {
  if (filteredGames.length === 0) return null;

  return (
    <Box
      position="absolute"
      top="100%"    // right below the input
      left={0}
      right={0}
      bg="white"
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
          _hover={{ bg: "gray.100", cursor: "pointer" }}
        >
          {game.name}
        </Box>
      ))}
    </Box>
  );
};

