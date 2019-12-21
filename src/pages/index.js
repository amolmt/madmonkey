import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/home/HeroSection"
import { Box, Flex } from "@chakra-ui/core"
import NomadMonkey from "../components/home/NomadMonkey"
import TravelMenu from "../components/home/TravelMenu"
import Stats from "../components/stats"
import ContactForm from "../components/home/ContactForm"
import TestimonialComponent from "../components/home/TestimonialComponent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NomadMonkey />
    <Flex align="center" justify="center">
      <HeroSection />
    </Flex>
    <Box mt={10} mb={10}>
      <TravelMenu />
    </Box>
    <Stats />
    <TestimonialComponent />
    <Box mt={20} mb={20}>
      <ContactForm />
    </Box>
  </Layout>
)

export default IndexPage
