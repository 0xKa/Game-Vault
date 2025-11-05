import useGameQueryStore from "@/stores/gamesStore";
import { Box, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Box flex="1">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputRef.current) setSearchText(inputRef.current.value);
        }}
      >
        <InputGroup
          startElement={<LuSearch />}
          endElement={
            <Kbd
              display={{ base: "none", md: "inline-flex" }}
              whiteSpace="nowrap"
            >
              Ctrl + K
            </Kbd>
          }
        >
          <Input
            ref={inputRef}
            placeholder="Search Games..."
            borderRadius={10}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
