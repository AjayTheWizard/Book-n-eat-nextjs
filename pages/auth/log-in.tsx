import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
import { useState } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { useStore } from './../../lib/useStore';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const editUser = useStore(state=>state.editUser)
  const trimEmail = (email:string): string=>{
    const atIndex = email.indexOf("@");
    return email.slice(0, atIndex)
  }
  const logInSubmitHandler = ()=>{
    console.log({
      email,
      password
    })
    editUser(trimEmail(email), email)
    router.push("/")
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>App</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue("red.400", 'gray.700')}
          color={"white"}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel >Email address</FormLabel>
              <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  onChange={(e)=>{setPassword(e.target.value)}} value={password}  type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={useColorModeValue("#E2E8F0", "blue.500")}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={logInSubmitHandler}
               >
                Log In
              </Button>
            </Stack>
          </Stack>
                <Center>
              <Text>or</Text>
                </Center>
                <Center>
                  <NextLink href="/auth/sign-up" passHref>

              <Link color={'blue.400'}>Sign Up for Free</Link>
                  </NextLink>
                </Center>
        </Box>
      </Stack>
    </Flex>
  );
}
