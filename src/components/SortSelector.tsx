import { createListCollection, Portal, Select } from "@chakra-ui/react";

const collection = createListCollection({
  items: [
    { label: "Relevance", value: "relevance" },
    { label: "Date added", value: "date" },
    { label: "Name", value: "name" },
    { label: "Released", value: "released" },
    { label: "Popularity", value: "popularity" },
    { label: "Average rating", value: "rating" },
  ],
});

const SortSelector = () => {
  return (
    <Select.Root collection={collection} color="purple.500" size="sm">
      <Select.HiddenSelect />
      {/* <Select.Label>Sort</Select.Label> */}

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Sort by..." />
        </Select.Trigger>

        <Select.IndicatorGroup>
          <Select.ClearTrigger cursor="pointer" />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
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
