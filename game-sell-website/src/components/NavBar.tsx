import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchingInput } from "./SearchingInput";

interface Props{
  onSearch : (searchText:string)=>void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <HStack padding='10px' justifyContent="left">
        <Image src={logo} boxSize='60px'/>
        <SearchingInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
    
  )
}
