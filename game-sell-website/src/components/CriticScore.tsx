import { Badge } from '@chakra-ui/react'
import { HiStar } from 'react-icons/hi'

interface Props{
    score:number | null;
}
export const CriticScore = ({score}:Props) => {
    const color= score && score>75 ? "green": score && score>60? "yellow":  " ";
  return (
    <Badge variant="solid" colorPalette={color} >
        <HiStar />
        {(score === 0 || score === null)? "No Score": score}
    </Badge>
  )
}
