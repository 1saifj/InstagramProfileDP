import React, { useState, useContext } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import InstagramContext from "../store/index";
import myData from "../services/api";
function Search() {
  let data1 = "";
  const { searchInstagramUser } = useContext(InstagramContext);
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    if (search !== "") {
      searchInstagramUser(search);
    } else {
      alert("Input is empty !!");
    }
  };
  return (
    <Box mt={4} p={2} display="flex">
      <InputGroup size="lg" shadow="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          size="lg"
          border="none"
          fontSize={{ base: "0.89rem", md: "1.2rem", lg: "1.5rem" }}
          placeholder="Seach Instagram User"
          variant="filled"
          onChange={(e) => searchHandler(e)}
        />
        <InputRightElement width="auto">
          <Button
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
            fontWeight={100}
            mr={2}
            px="6"
            size="md"
            variant="solid"
            onClick={() => handleSubmit()}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Search;
