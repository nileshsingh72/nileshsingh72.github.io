import {
  Flex,
  Box,
  Text,
  Button,
  FormControl,
  Input,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box
      id="contact"
      width={"70%"}
      margin={"auto"}
      minH={"90vh"}
      paddingBottom={70}
      marginTop={5}
    >
      <Flex
        marginBottom={"30px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color="#2B6CB0"
        justify={"center"}
        fontWeight={600}
      >
        {/**/}
        <Box borderBottom="5px solid #2B6CB0">Contact Me</Box>
      </Flex>
      <form
        action="https://getform.io/f/b434cd75-9507-44a9-8c2e-b23c7076ae39"
        method="POST"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <Input
                padding={"30px"}
                bg={"rgba(66, 153, 225, 0.6)"}
                name="name"
                placeholder="Your name"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <Input
                padding={"30px"}
                name="email"
                type="email"
                bg={"rgba(66, 153, 225, 0.6)"}
                placeholder="Your email"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <Textarea
                minH={"30vh"}
                name="Message"
                variant="filled"
                bg={"rgba(66, 153, 225, 0.6)"}
                placeholder="Your message"
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Flex justify={"center"} marginTop={5}>
          <Button
            type="submit"
            px={50}
            bg={"rgba(66, 153, 225, 0.6)"}
            value="Submit"
          >
            Send
          </Button>
        </Flex>
      </form>

      <Flex marginTop={30} justify={"center"} gap={8}>
        <Box>
          <a href="https://github.com/nileshsingh72" target="_blank">
            <img
              width={35}
              src="	https://cdn.iconscout.com/icon/free/png-128/github-logo-3002017-2496133.png"
              alt=""
            />
          </a>
        </Box>
        <Box>
          <a href="mailto: rnileshchauhan89@gmail.com" target="_blank">
            <img
              width={35}
              src="	https://cdn.iconscout.com/icon/premium/png-128-thumb/mail-5689206-4761492.png"
              alt=""
            />
          </a>
        </Box>
        <Box>
          <a href="https://www.linkedin.com/in/nileshsingh99/" target="_blank">
            <img
              width={35}
              src="	https://cdn.iconscout.com/icon/free/png-128/linkedin-logo-3002013-2496129.png"
              alt=""
            />
          </a>
        </Box>
      </Flex>
      <Flex justify={"center"} marginTop={"20px"}>
        <Text
          fontSize={{ base: "12px", md: "15px", lg: "20px" }}
          fontWeight={"500"}
          color="black"
        >
          Call: +91 7974176492
        </Text>
      </Flex>
      <Flex justify={"center"}>
        <Text fontWeight={700}>Design by : Nileshsingh Chauhan</Text>
      </Flex>
    </Box>
  );
}
