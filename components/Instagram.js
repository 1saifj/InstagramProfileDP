import React, { useContext } from "react";
import InstagramContext from "../store/index";
import {
  Image,
  Grid,
  Container,
  Heading,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Link,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";

const Instagram = () => {
  const { userInfo } = useContext(InstagramContext);

  if (Object.keys(userInfo).length === 0) {
    return (
      <Heading mt={4} as="h5" size="sm" color="blue.500">
        Search for a github user!!
      </Heading>
    );
  }
  return (
    <Container my={6} p={6} rounded="lg">
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Image
            borderRadius="full"
            boxSize="80px"
            src={userInfo.profile_pic_url_hd}
          />
        </GridItem>
        <GridItem
          colSpan={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Heading textAlign="left" as="h5" size="sm">
            {userInfo.full_name}
          </Heading>
        </GridItem>

        <GridItem colSpan={4}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Followers</Th>
                <Th>Following</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{userInfo.edge_followed_by.count}</Td>
                <Td>{userInfo.edge_follow.count}</Td>
              </Tr>
            </Tbody>
          </Table>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Instagram;
