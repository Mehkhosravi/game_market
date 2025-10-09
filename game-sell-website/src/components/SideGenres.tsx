import { Box, Button, Checkbox, Heading, HStack, Image, ListItem, ListRoot } from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import getImageCropped from "../services/crop-image";
import { SideGenreSkeleton } from "./SideGenreSkeleton";


interface Props {
  onSelectedGenre: (genre: Genre|null) => void;
  selectedGenre: Genre | null;
}
export const SideGenres = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenre();

  if (isLoading) return <SideGenreSkeleton />;
  if (error) return null;

  return (
    <Box paddingLeft="5px">
      <Heading fontSize="xl" marginBottom={3}>Genres</Heading>
      <Checkbox.Root
        defaultChecked={true}               
        onCheckedChange={({ checked }) => {
          // checked can be true | false | "indeterminate"
          if (checked === true) {
            onSelectedGenre(null); // show all
          }
          // If user unchecks -> do nothing; wait for a genre click
        }}
        variant="outline"
        colorPalette="blue"
        mb={3}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>All genres</Checkbox.Label>
      </Checkbox.Root>

      <ListRoot listStyleType="none">
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                key={genre.id}
                src={getImageCropped(genre.image_background)}
              />
              <Button
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
                }
                bg={genre.id === selectedGenre?.id  ? "gray.700" : ""}
                fontSize="sm"
                variant="ghost"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </ListRoot>
    </Box>
  );
};
