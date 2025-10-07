import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { InputBox } from "./InputBox";

interface Props{
  handleSelectedGame: (gameSlug:string)=> void;
}
export const NavBar = ({handleSelectedGame}:Props) => {
  return (
    <HStack justifyContent="space-between">
      <HStack padding='10px' justifyContent="left">
        <Image src={logo} boxSize='60px'/>
        <InputBox handleSelectedGame={(gameSlug:string)=>handleSelectedGame(gameSlug)} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
    
  )
}
