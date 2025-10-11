import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface SortOrderSelectorProps {
  value: "asc" | "desc";
  onSelectSortOrder: (order: "asc" | "desc") => void;
}

const SortOrderSelector = ({
  value,
  onSelectSortOrder,
}: SortOrderSelectorProps) => {
  const items = [
    { label: "Ascending", value: "asc" as const },
    { label: "Descending", value: "desc" as const },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiSortAscending /> Sort
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) =>
                onSelectSortOrder(e.value as "asc" | "desc")
              }
            >
              {items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortOrderSelector;
