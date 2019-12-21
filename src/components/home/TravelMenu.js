import React from "react"
import { SimpleGrid, Box, Flex, Image, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"
import Skeleton from "react-loading-skeleton"
import travelMenu from "../../data/travelMenu"

const TravelMenu = () => {
  return (
    <SimpleGrid columns={[1, null, 3]} spacing="40px">
      {travelMenu.map((data, i) => {
        return (
          <Link to={data.url}>
            <Box maxW={400} overflow="hidden" rounded="lg" key={i} shadow="md">
              <Flex justify="center" align="center" direction="column">
                <Box>
                  <Image
                    src={data.imageUrl}
                    alt={data.imageAlt}
                    fallbackSrc="https://via.placeholder.com/1600x900"
                  />
                </Box>

                <Box mt={30} mb={30} mr="auto" ml="auto">
                  <Heading as="h3" size="lg">
                    {data.title}
                  </Heading>
                </Box>
              </Flex>
            </Box>
          </Link>
        )
      })}
    </SimpleGrid>
  )
}

export default TravelMenu
