import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuSearch } from 'react-icons/lu'

interface Props{
    onSearch: (searchText:string)=>void;
}

export const SearchingInput = ({ onSearch }: Props) => {
    const ref= useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event:React.FormEvent)=>{
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value)
    }}>
        <InputGroup flex="1" startElement={<LuSearch />} >
            <Input ref={ref} borderRadius={20} variant="subtle" placeholder="Search Games" />
        </InputGroup>
    </form>
  )
}
