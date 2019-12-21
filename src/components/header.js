import PropTypes from "prop-types"
import React from "react"
import { Text, Flex, Button, Icon, useColorMode } from "@chakra-ui/core"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header
      style={{
        background: `transparent`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Flex justify="space-between">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <Text as="div" fontSize="xl" fontWeight="bold">
                Nomad Monkey{" "}
                <span role="img" aria-labelledby="bolt">
                  🐵
                </span>
              </Text>
            </Link>
          </h1>

          <Flex justify="space-between" align="center">
            <Button onClick={toggleColorMode} bg="transparent" size="sm" mr={2}>
              {colorMode === "light" ? (
                <Icon name="moon" mr={1} />
              ) : (
                <Icon name="sun" mr={1} />
              )}
            </Button>
            <Link to={`/account`}>
              <Button variantColor="teal" size="sm" variant="outline">
                <Icon name="lock" mr={1} />
                Login
              </Button>
            </Link>
          </Flex>

          {/* <Tag variantColor="blue" rounded="full">
          <Avatar
            src="https://bit.ly/ryan-florence"
            size="xs"
            name="Jack"
            ml={-1}
            mr={2}
          />
          <TagLabel>Jack Ma</TagLabel>
        </Tag> */}
        </Flex>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
