import usePlatforms from "@/hooks/usePlatforms";
import { Button, createListCollection, Portal, Select } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms();

  if (isLoading)
    return (
      <Button loading variant="outline" width="25%" ml={10} mb={-3}>
        Loading...
      </Button>
    );

  const items =
    platforms?.map((p) => ({
      label: p.name,
      value: p.slug,
      data: p,
    })) ?? [];

  const platformsList = createListCollection({ items });

  return (
    <Select.Root
      disabled={!!error || !platforms}
      collection={platformsList}
      size="sm"
      width="25%"
      ml={10}
      mb={-3}
    >
      <Select.HiddenSelect />
      {/* <Select.Label>Select Platform</Select.Label> */}

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select platform" />
        </Select.Trigger>

        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {platformsList.items.map((platform) => (
              <Select.Item item={platform} key={platform.value}>
                {platform.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default PlatformSelector;
