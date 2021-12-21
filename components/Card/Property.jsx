import { Box, Flex } from "@chakra-ui/react";

export const Property = (props) => {
  const { label, value, ...flexProps } = props;
  return (
    <Flex
      as="dl"
      direction={{
        base: "column",
        sm: "row",
      }}
      px="6"
      py="4"
      {...flexProps}
    >
      <Box as="dt" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
};
