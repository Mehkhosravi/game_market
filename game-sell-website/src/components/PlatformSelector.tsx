import { Button, Menu } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import type { Platform } from "../hooks/useGame";
import { LuChevronDown } from "react-icons/lu";


interface Props {
  handleSelectedPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  handleSelectedPlatform,
  selectedPlatform,
}: Props) => {
  const { data: platforms , error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || "Select Platform"}
        <LuChevronDown /></Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {platforms.map((platform) => (
            <Menu.Item key={platform.id} value={platform.name} onClick={() => handleSelectedPlatform(platform)}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
