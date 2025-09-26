import { Button, Menu, Portal } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import type { Platform } from "../hooks/useGame";

interface Props {
  handleSelectedPlatform: (platform: Platform|null) => void;
}

export const PlatformSelector = ({ handleSelectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatform();

  console.log(platforms);
  if (error) return null; 
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          platform selector
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item
                value={platform.name}
                key={platform.id}
                onClick={() => handleSelectedPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
