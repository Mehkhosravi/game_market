import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Skeleton
        height="200px"
        css={{
          "--start-color": "colors.pink.500",
          "--end-color": "colors.orange.500",
        }}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};
