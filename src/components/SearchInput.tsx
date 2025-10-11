import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
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
    <InputGroup
      flex="1"
      startElement={<LuSearch />}
      endElement={
        <Kbd display={{ base: "none", md: "inline-flex" }} whiteSpace="nowrap">
          Ctrl + K
        </Kbd>
      }
    >
      <Input ref={inputRef} placeholder="Search Games..." borderRadius={10} />
    </InputGroup>
  );
};

export default SearchInput;
