import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import type { Game } from '../hooks/useGame';
import { PlatformIconList } from './PlatformIconList';

interface Props{
    game:Game
}

export const GameCard = ({ game } : Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList platform={game.platforms.map(p=>p.platform)} />
        </CardBody>
    </Card.Root>
  );
}
