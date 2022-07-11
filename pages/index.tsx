import {
  Box,
  Flex,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MenuCard } from "../components/RestaruntCard"

export default function Home() {
  return (
    <Box>
      <Center mb={3}>
        <InputGroup
          w={{
            base: "90vw",
            sm: "80vw",
          }}
        >
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </InputLeftElement>
          <Input placeholder="Search here" />
        </InputGroup>
      </Center>
      <Flex flexWrap="wrap" justifyContent="space-around">
        <MenuCard link="kfc" />
        <MenuCard link="surfers" />
        <MenuCard link="any" />
      </Flex>
    </Box>
  );
}
