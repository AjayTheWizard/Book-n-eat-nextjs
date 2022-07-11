import { AppProps } from "next/app"
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import Nav from "../components/layout/Navbar";


const theme = extendTheme({
    color: {
      primary: {
        main: "#ff003c"
      }
    }
 })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Box m={6}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
