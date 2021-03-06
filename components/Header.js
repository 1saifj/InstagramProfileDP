import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
function Header({ name }) {
  return (
    <Box
      mt={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h5" size="sm">
        {name}
      </Heading>
      <ThemeToggleButton />
    </Box>
  );
}

export default Header;
