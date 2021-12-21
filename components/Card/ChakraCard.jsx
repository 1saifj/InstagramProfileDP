import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";

export const ChakraCard = () => (
  <Box
    as="section"
    py="50"
    px={{
      md: "8",
    }}
  >
    <Card maxW="3xl" mx="auto">
      <CardHeader title="Get Instagram Profile Pic" />

      <CardContent>
        <InputGroup>
          <InputLeftAddon children="ID" variant="outline" size="lg" />
          <Input
            variant="outline"
            placeholder="Enter Instagram Username"
            size="lg"
          />
        </InputGroup>
        <Button colorScheme="teal" size="lg" variant="outline">
          Get Photo
        </Button>
      </CardContent>
    </Card>
  </Box>
);

// action={
//         <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
//           Edit
//         </Button>
//       }
