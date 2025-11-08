import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Highlight, Heading, Stack, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Stack pt={10} gap={6} textAlign="center">
      <Heading size="5xl" letterSpacing="wide">
        <Highlight query="Oops!" styles={{ color: "purple.600" }}>
          Oops! Something went wrong.
        </Highlight>
      </Heading>
      <Text fontSize="xl" color="fg.muted">
        {isRouteErrorResponse(error)
          ? `Invalid Route, This page does not exist (Error ${error.status})`
          : "An unexpected error occurred. Please try again later."}
      </Text>
    </Stack>
  );
};

export default ErrorPage;
