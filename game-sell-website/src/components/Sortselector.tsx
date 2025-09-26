import { Button, Menu } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu';


export const Sortselector = () => {
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
            Ordered By : Relevance
            <LuChevronDown />
            </Button>
        </Menu.Trigger>
        <Menu.Positioner>
            <Menu.Content>
                <Menu.Item key={1} value='Rel'>Relevance</Menu.Item>
                <Menu.Item key={2} value='Date'>Date added</Menu.Item>
                <Menu.Item key={3} value='Name'>Name</Menu.Item>
                <Menu.Item key={4} value='Release'>Release</Menu.Item>
                <Menu.Item key={5} value='Popularity'>Popularity</Menu.Item>
                <Menu.Item key={6} value='AvgRate'>Average Rating</Menu.Item>
            </Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
  );
}
