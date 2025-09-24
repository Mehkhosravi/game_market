import {FaAndroid,FaLinux,FaApple, FaWindows, FaXbox,FaPlaystation} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from '../hooks/useGame';
import type { IconType } from "react-icons";

interface Props{
    platform:Platform[];
}
export const PlatformIconList = ({platform}:Props) => {
    const iconMap:{[key:string]:IconType}={
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        web: BsGlobe,
        pc:FaWindows,
        android: FaAndroid,
        ios: MdPhoneIphone
    }

    function normalizeSlug(slug: string): string {
    if (slug.startsWith("playstation")) return "playstation";
    if (slug.startsWith("xbox")) return "xbox";
    if (slug === "macos") return "mac"; // API uses "macos", you mapped "mac"
    if (slug.startsWith("nintendo")) return "nintendo";
    return slug; // keep as is if already matches
    }
   const uniqueSlugs = [...new Set(platform.map(p => normalizeSlug(p.slug)))];
  return (
    <HStack marginY={2} >
        {uniqueSlugs.map((p) => {
        const IconComponent = iconMap[p];
        return IconComponent ? <Icon as={IconComponent} key={p} color="gray.500" /> : null;
      })}
    </HStack>
  )
};
