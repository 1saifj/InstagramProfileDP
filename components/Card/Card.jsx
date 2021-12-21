import { Box, Center } from "@chakra-ui/react";

export const Card = (props) => (
  <Box
    rounded={{
      md: "lg",
    }}
    shadow="base"
    overflow="hidden"
    {...props}
  />
);
