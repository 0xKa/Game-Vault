import { createListCollection, Portal, Select } from "@chakra-ui/react";

interface SortSelectorProps {
  OnSortSelect: (value: string) => void;
  selectedSort?: string;
}

const SortSelector = ({ OnSortSelect, selectedSort }: SortSelectorProps) => {
  const sortingOptions = createListCollection({
    items: [
      { label: "Name", value: "name" },
      { label: "Relevance", value: "relevance" },
      { label: "Popularity", value: "metacritic" },
      { label: "Average Rating", value: "rating" },
      { label: "Date Added", value: "added" },
      { label: "Release Date", value: "released" },
      { label: "Created Date", value: "created" },
      { label: "Updated Date", value: "updated" },
    ],
  });

  return (
    <Select.Root
      collection={sortingOptions}
      color="purple.500"
      size="sm"
      value={selectedSort ? [selectedSort] : undefined}
    >
      <Select.HiddenSelect />
      {/* <Select.Label>Sort</Select.Label> */}

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Sorted by Relevance" />
        </Select.Trigger>

        <Select.IndicatorGroup>
          <Select.ClearTrigger
            cursor="pointer"
            onClick={() => OnSortSelect("")}
          />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortingOptions.items.map((item) => (
              <Select.Item
                item={item}
                key={item.value}
                onClick={() => {
                  OnSortSelect(item.value);
                }}
              >
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SortSelector;
