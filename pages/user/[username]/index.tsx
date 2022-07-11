import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "./../../../lib/useStore";
import { OrderCard } from "../../../components/user/OrderCard";
import { WishListCard } from "../../../components/user/WishListCard";
import { NothingToShow } from "../../../components/layout/NothingToShow";

export default function UserIndex() {
  const router = useRouter();
  const [location, setLocation] = useState("Somewhere in World");
  const [bio, setBio] = useState("Some lengthy Bio like Rust for your foood");
  const [password, setPassword] = useState("");
  const { username, page = "orders" } = router.query;
  return (
    <Box mt={8}>
      <SocialProfileWithImage
        location={location}
        username={username as string}
        bio={bio}
      />   
      <Box>
        <Tabs size={"lg"} isFitted>
          <TabList>
            <Tab>Orders</Tab>
            <Tab>Wishlist</Tab>
            <Tab>My Hotels</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels minH="90vh">
            <TabPanel>
              <Heading id="order">My Orders</Heading>
              <OrderCard />
            </TabPanel>
            <TabPanel minH="90vh">
              <Heading mb={3}>My Wishlist</Heading>
              <WishListCard />
              <WishListCard />
              <WishListCard />
            </TabPanel>
            <TabPanel>
              <Heading mb={3}>Settings</Heading>
              <Stack>
                <FormControl>
                  <FormLabel htmlFor="location">Location:</FormLabel>
                  <Input
                    id="location"
                    type="text"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    value={location}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="bio">Biographpy:</FormLabel>
                  <Input
                    id="bio"
                    type="text"
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                    value={bio}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="location">Password:</FormLabel>
                  <Input
                    id="bio"
                    type="text"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="New Password"
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>
                <Button colorScheme="green">Save</Button>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Heading>My Hotels</Heading>
              <NothingToShow/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

function SocialProfileWithImage(props: {
  username: string;
  bio: string;
  location: string;
}) {
  const imgLink = useStore((state) => state.imgLink);
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={"useColorModeValue('white', 'gray.800')"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"40vh"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"2xl"}
            src={imgLink}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6} mb={2}>
          <Stack spacing={2} align={"center"} mb={5}>
            <Heading fontSize={"3xl"} fontWeight={500} fontFamily={"body"}>
              {props.username}
            </Heading>
            <Text as="i" fontSize="xl">
              {props.bio}
            </Text>
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
              <Text fontSize={"lg"}>{props.location}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
