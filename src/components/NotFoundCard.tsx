import { Box, Text, VStack } from "@chakra-ui/react";

export const NotFoundCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      width="300px"
      height="200px"         // fills the container like a normal card
      bg="gray.50"           // light background to mimic a card
      borderColor="gray.200"
      _hover={{ bg: "gray.100" }}
      textAlign="center"
    >
      <VStack justify="center" align="center"  h="100%">
        <Text fontSize="2xl">🎮</Text>
        <Text fontSize="md" color="gray.500">
          No games found
        </Text>
      </VStack>
    </Box>
  );
};
