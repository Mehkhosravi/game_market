import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import getImageCropped from "../services/crop-image";

export const SideGenres = () => {
  const { data: genres } = useGenre();
  return (
    <ListRoot paddingLeft="5px">
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} key={genre.id} src={getImageCropped(genre.image_background)} />
            <Text fontSize="sm" >{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};
