import React from "react"
import { SimpleGrid, Flex, Text, Heading } from "@chakra-ui/core"

const data = [
  {
    title: "200K",
    desc: "Page Views",
  },

  {
    title: "75K",
    desc: "Global Users",
  },

  {
    title: "850+",
    desc: "Registered Users",
  },
  {
    title: "40K+",
    desc: "Monthly Page Views",
  },
  {
    title: "1000+",
    desc: "Monthly Page Views",
  },
  {
    title: "700K+",
    desc: "Public Nomads",
  },
]

const Stats = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <Heading as="h2" size="xl" mt={10} mb={5}>
          Statistics
        </Heading>
      </Flex>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" cursor="default">
        {data.map((d, i) => {
          return (
            <Flex
              justify="center"
              align="center"
              direction="column"
              mt={30}
              mb={30}
            >
              <Heading as="h2" size="lg">
                {d.title}
              </Heading>
              <Text>{d.desc}</Text>
            </Flex>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default Stats
