import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"

const HeroSection = () => {
  return (
    <Box>
      <Heading
        mb={4}
        color="red"
        as="h1"
        size="2xl"
        letterSpacing={1.5}
        style={{ textAlign: "center" }}
      >
        Nomad Monkey
      </Heading>
      <Text
        fontSize="xl"
        color="gray.500"
        mt={10}
        mb={10}
        pl={[null, 20, 20]}
        pr={[null, 20, 20]}
      >
        Connect with digital nomads around the world. Make the whole world your
        office. Life is not meant to be lived in a cubicle or stuck in one
        place. Learn how to use the power of marketing to build a life you don’t
        need a vacation from.
      </Text>
    </Box>
  )
}

export default HeroSection
