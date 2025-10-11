import { Box, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
          if (inputRef.current) onSearch(inputRef.current.value);
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
