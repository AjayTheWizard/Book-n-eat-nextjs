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
import { useStore } from './../../lib/useStore';


import NextLink from "next/link"

export default ()=> {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const editUser = useStore(state=>state.editUser)
  const transformUserName = (name: string)=>{
    return name.replace(/\s/g, "-")
  }
  const logInSubmitHandler = ()=>{
    console.log({
      email,
      userName
    })
    editUser(transformUserName(userName), email)
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
          <Heading fontSize={'4xl'}>Sign Up for Free</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            create and enjoy our <Link color={'blue.400'}>App</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="user">
              <FormLabel>Username</FormLabel>
              <Input value={userName} onChange={e=>{setUserName(e.target.value)}} type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={e=>{setEmail(e.target.value)}} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={e=>{setPassword(e.target.value)}} type="password" />
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
                bg={'blue.400'}
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
                  <NextLink href="/auth/log-in" passHref>
              <Link color={'blue.400'}>Already have an account</Link>
                  </NextLink>
                </Center>
        </Box>
      </Stack>
    </Flex>
  );
}
