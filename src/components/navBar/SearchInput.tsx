import useGameQueryStore from "@/stores/gamesStore";
import { Box, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const storedSearch = useGameQueryStore((s) => s.gameQuery.searchQuery); // current committed search
  const [draft, setDraft] = useState(storedSearch || ""); // local (not committed yet)

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
          setSearchText(draft); // commit draft
          if (location.pathname !== "/") navigate("/");
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
            value={draft}
            onChange={(e) => setDraft(e.target.value)} // local only
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
