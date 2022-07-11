import { ReactNode } from "react";
import NextLink from "next/link";
import NextImage from "next/image"
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { colors } from "../../lib/color"
import { useStore } from './../../lib/useStore';

const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={"/"} passHref>
    <Link
      px={2}
      py={1}
      as={NextLink}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("primary", "gray.700"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Nav() {
  const isUser = useStore(state=>state.isUser)
  const userName = useStore(state=>state.userName)
  const imgLink = useStore(state=>state.imgLink)
  const logOut = useStore(state=>state.logOut)
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box sx={{
        px: 4,
        py: 2,
        mx: 2,
        mt: 2,
        borderRadius: 6
      }} bg={useColorModeValue("red.400", "gray.700")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display="flex" alignItems="center" >
            <NextImage src="/logo.png" width={75} height={75} />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={imgLink}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={imgLink}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {!isUser && (
                    <>
                  <MenuItem><NextLink href="/auth/sign-up">Sign Up</NextLink></MenuItem>
                  <MenuItem><NextLink href="/auth/log-in">Log In</NextLink></MenuItem>
                    </>
                  )}
                  {isUser && (
                    <>
                  <MenuItem><NextLink href={`/user/${userName}`}>Profile</NextLink></MenuItem>
                  <MenuItem>Orders</MenuItem>
                  <MenuItem>My Wishlists</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={logOut} >Log Out</MenuItem>
                    </>
                  )}
                  </MenuList>
              </Menu>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
