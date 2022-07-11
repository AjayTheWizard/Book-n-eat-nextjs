import { Box, Text, Flex, useColorModeValue, Button, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"

export const OrderCard = () => {
  return (
    <Box color="white" my={4} py={4} px={5} borderRadius={"lg"} bg={useColorModeValue("red.400", "gray.700")}>
      <Heading fontSize={"3xl"}>Chosen Restaraunt</Heading>
      <Flex my={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <Text fontSize={"lg"}>Thoothukudi, Tamilnadu, India</Text>
      </Flex>
      <Text>Ordered: 2m ago</Text>
      <Text>Remaining Time: 2hrs</Text>
      <Button mt={2} rightIcon={<ArrowForwardIcon/>} colorScheme={useColorModeValue("red", "gray")}>More</Button>
    </Box>
  );
};
