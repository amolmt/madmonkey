import React from "react"
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/core"
// import airports from "./airports.json"

// Object.values(airports).map((data, i) => console.log(data.city))

const Airport = () => {
  return (
    <Box bg="Purple" rounded="md">
      <Image rounded="md" src="https://bit.ly/2k1H1t6" />
      <Box p={5}>
        <Flex align="baseline">
          <Badge variantColor="yellow">city</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="white.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Airport
