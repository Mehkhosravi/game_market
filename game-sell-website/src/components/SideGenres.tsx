import { Button, HStack, Image, ListItem, ListRoot } from "@chakra-ui/react";
import { useGenre, type Genre } from "../hooks/useGenre";
import getImageCropped from "../services/crop-image";
import { SideGenreSkeleton } from "./SideGenreSkeleton";

interface Props{
  onSelectedGenre: (genre:Genre)=>void;
}
export const SideGenres = ({ onSelectedGenre }:Props) => {
  const { data: genres, isLoading, error } = useGenre();
  if (isLoading)  return( <SideGenreSkeleton /> );
  if (error) return null;

  return (
    <ListRoot paddingLeft="5px">
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} key={genre.id} src={getImageCropped(genre.image_background)} />
            <Button fontSize="sm" variant="ghost" onClick={()=>onSelectedGenre(genre)} >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};
