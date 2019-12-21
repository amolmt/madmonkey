import React from "react"
import { Box, SimpleGrid, Text, Flex, Image } from "@chakra-ui/core"

export default function Testimonial() {
  return (
    <Box mt={10} mb={10}>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Box>
          <Text
            fontSize="xl"
            color="gray.500"
            mt={10}
            mb={10}
            pl={[null, 20, 20]}
            pr={[null, 20, 20]}
          >
            Connect with digital nomads around the world. Make the whole world
            your office. Life is not meant to be lived in a cubicle or stuck in
            one place. Learn how to use the power of marketing to build a life
            you don’t need a vacation from.
          </Text>
        </Box>
        <Flex align="center" justify="center">
          <Image
            rounded="full"
            size="150px"
            src="https://bit.ly/sage-adebayo"
            fallbackSrc="https://via.placeholder.com/1600x900"
            alt="Segun Adebayo"
          />
        </Flex>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Box>
  )
}
