import { Box } from "@chakra-ui/react"
import { useRouter } from "next/router"

const Restaurant = ()=>{
  const router = useRouter()
  return (
    <Box>
      Restaurant { router.query.name }
    </Box>
  )
}

export default Restaurant;
