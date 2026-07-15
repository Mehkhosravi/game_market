import {
  ListRoot,
  ListItem,
  HStack,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

export const SideGenreSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13];
  return (
    <ListRoot paddingLeft="5px">
      {skeletons.map((skeleton) => (
        <ListItem paddingY="5px" key={skeleton}>
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText noOfLines={1} height="3" width="70px" />
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};
