import { Button, HStack, Stack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <HStack>
        <Button colorScheme="teal">Click me</Button>
        <Button colorScheme="blue">Click me</Button>
        <Stack direction="row" gap="4" align="center">
          <Button loading>Click me</Button>
          <Button loading loadingText="Saving...">
            Click me
          </Button>
        </Stack>
      </HStack>
    </>
  );
}

export default App;
