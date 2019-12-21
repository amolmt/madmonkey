import React from "react"
import { Text, Flex, Box } from "@chakra-ui/core"
import { FaSitemap } from "react-icons/fa"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <Flex align="center" justify="center" direction="column" mt={10}>
        <Text as="div" fontSize="xs" fontWeight="semibold">
          Proudly made in{" "}
          <span role="img" aria-labelledby="india-flag">
            🇮🇳
          </span>
        </Text>
        <Text as="div" fontSize="xs" fontWeight="semibold" mt={1}>
          © {new Date().getFullYear()} Nomad Monkey{" "}
          <span role="img" aria-labelledby="nomad-monkey">
            🐵
          </span>
        </Text>
        <Link to={"/sitemap.xml"}>
          <Box as={FaSitemap} area-labeledby="sitemap" size="16px" m={2} />
        </Link>
      </Flex>
    </footer>
  )
}

export default Footer
