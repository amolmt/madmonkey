import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Box, Flex, Text } from "@chakra-ui/core"

const Success = props => (
  <Layout>
    <Helmet>
      <title>Nomad Monkey | Thank you</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <Box>
      <Flex align="center" justify="center">
        <Text>Thank you</Text>
      </Flex>
    </Box>
  </Layout>
)

export default Success
