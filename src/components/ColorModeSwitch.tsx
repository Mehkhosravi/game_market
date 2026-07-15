import {  Switch  } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    
    <Switch.Root checked={isDark}
      onCheckedChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>dark mode</Switch.Label>
    </Switch.Root>

  );
};
