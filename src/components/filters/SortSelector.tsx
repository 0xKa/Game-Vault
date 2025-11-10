import { createListCollection, Portal, Select } from "@chakra-ui/react";
import SortOrderSelector from "./SortOrderSelector";
import { useMemo, useState } from "react";
import useGameQueryStore from "@/stores/gamesStore";

const SortSelector = () => {
  const selectedSortOption = useGameQueryStore((s) => s.gameQuery.sortOption);
  const setSelectedSortOption = useGameQueryStore((s) => s.setSortOption);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    selectedSortOption?.startsWith("-") ? "desc" : "asc"
  );

  const getValue = (sortOption: string) =>
    sortOrder === "desc" ? `-${sortOption}` : sortOption;

  const sortingOptions = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Name", value: getValue("name") },
          { label: "Relevance", value: getValue("relevance") },
          { label: "Popularity", value: getValue("metacritic") },
          { label: "Average Rating", value: getValue("rating") },
          { label: "Release Date", value: getValue("released") },
          // { label: "Date Added", value: getValue("added") },
          // { label: "Created Date", value: getValue("created") },
          // { label: "Updated Date", value: getValue("updated") },
        ],
      }),
    [sortOrder]
  );

  const currentBase = selectedSortOption?.replace(/^-/, "") || "relevance";

  return (
    <>
      <Select.Root
        collection={sortingOptions}
        color="purple.500"
        size="sm"
        value={selectedSortOption ? [selectedSortOption] : undefined}
      >
        <Select.HiddenSelect />

        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Sorted by Relevance" />
          </Select.Trigger>

          <Select.IndicatorGroup>
            <Select.ClearTrigger
              cursor="pointer"
              onClick={() => setSelectedSortOption("")}
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
                    setSelectedSortOption(item.value);
                    setSortOrder(item.value.startsWith("-") ? "desc" : "asc");
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

      <SortOrderSelector
        sortOption={selectedSortOption || "relevance"}
        value={sortOrder}
        onSelectSortOrder={(order) => {
          setSortOrder(order);
          const next = order === "desc" ? `-${currentBase}` : currentBase;
          setSelectedSortOption(next);
        }}
      />
    </>
  );
};

export default SortSelector;
