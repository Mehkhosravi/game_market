import { Button, Menu, MenuItem } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";


interface Props{
  onSelectOrder: (sortOrder:string)=>void;
  selectedOrder: string;
}
export const Sortselector = ({ onSelectOrder, selectedOrder }: Props) => {
  
  const sortOrder = [
    {
      value: "",
      label: "Relevance",
    },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSelectedOrder= sortOrder.find(order=> selectedOrder===order.value)
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Ordered By : {currentSelectedOrder?.label|| "Relevance"}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrder.map((order) => (
            <MenuItem key={order.value} value={order.value} onClick={()=> onSelectOrder(order.value)}>
              {order.label}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
