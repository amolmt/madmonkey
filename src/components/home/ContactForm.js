import React from "react"
import useForm from "react-hook-form"
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  SimpleGrid,
  Box,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/core"

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = () => {
    alert(`Welcome!`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <FormControl>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              name="firstname"
              ref={register({
                required: "First Name is required",
              })}
            />
            <Text fontSize="md" style={{ color: "red" }}>
              {errors.firstname && errors.firstname.message}
            </Text>
          </Box>

          <Box>
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              name="lastname"
              ref={register({
                required: "Last Name is required",
              })}
            />
            <Text fontSize="md" style={{ color: "red" }}>
              {errors.lastname && errors.lastname.message}
            </Text>
          </Box>

          <Box>
            <FormLabel htmlFor="email">Username</FormLabel>
            <Input
              name="username"
              ref={register({
                required: "Usernames is required",
              })}
            />
            <Text fontSize="md" style={{ color: "red" }}>
              {errors.username && errors.username.message}
            </Text>
          </Box>

          <Box>
            <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input
                type="tel"
                roundedLeft="0"
                placeholder="phone number"
                name="phone"
                ref={register({
                  required: "Phone Number is required",
                })}
              />
            </InputGroup>
            <Text fontSize="md" style={{ color: "red" }}>
              {errors.phone && errors.phone.message}
            </Text>
          </Box>

          <Box>
            <Button type="submit" variantColor="teal" variant="outline">
              Submit
            </Button>
          </Box>
        </SimpleGrid>
      </FormControl>
    </form>
  )
}

export default ContactForm
