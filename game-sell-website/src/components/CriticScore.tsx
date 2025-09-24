import { Badge } from '@chakra-ui/react'
import { HiStar } from 'react-icons/hi'

interface Props{
    score:number
}
export const CriticScore = ({score}:Props) => {
    const color= score>75 ? "green": score>60? "yellow": " ";
  return (
    <Badge variant="solid" colorPalette={color} >
        <HiStar />
        {score}
    </Badge>
  )
}
