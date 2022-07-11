import { Box, Heading, Text, useColorModeValue, Flex, Badge, Button, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"

export const WishListCard = () => {
  return (
    <Box
      sx={{
        p: 4,
        w: "90vw",
        mb: 6,
        bg: useColorModeValue("red.400", "gray.700"),
        color: "white",
        borderRadius: "0.5rem",
        cursor: "pointer"
      }}
    >
      <Heading>Restaurant
      </Heading>
      <Badge colorScheme="green" variant="subtle" fontSize="0.8rem">Opened</Badge>
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
      <Flex my={1}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="25" height="25" viewBox="0 0 640 512">
          <path d="M592 224C565.5 224 544 245.5 544 272V352H96V272C96 245.5 74.51 224 48 224S0 245.5 0 272v192C0 472.8 7.164 480 16 480h64c8.836 0 15.1-7.164 15.1-16L96 448h448v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16v-192C640 245.5 618.5 224 592 224zM128 272V320h384V272c0-38.63 27.53-70.95 64-78.38V160c0-70.69-57.31-128-128-128H191.1c-70.69 0-128 57.31-128 128L64 193.6C100.5 201.1 128 233.4 128 272z" />
        </svg>
        <Text ml={1} fontSize={"lg"}>100 Seats</Text>
      </Flex>
      <Button mt={2} rightIcon={<ArrowForwardIcon/>} colorScheme={useColorModeValue("red", "gray")}>View More</Button>
      <Button ml={3} mt={2} colorScheme={useColorModeValue("red", "gray")}>Order</Button>
    </Box>
  );
};
