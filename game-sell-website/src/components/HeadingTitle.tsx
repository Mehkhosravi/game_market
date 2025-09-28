import { Heading } from '@chakra-ui/react'
import type { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery;
}

export const HeadingTitle = ({ gameQuery }: Props) => {
    //Games
    //Action Games
    //Xbox Games
    //Xbox Action Games
    const heading= `${gameQuery?.platform?.name || ""} ${gameQuery?.genre?.name || ""} Games`;
  return (
    <Heading fontSize='5xl' as="h1" >{heading}</Heading>
  )
};
