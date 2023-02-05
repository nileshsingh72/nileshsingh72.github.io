import {
  Flex,
  Box,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsPerson, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Flex
      flexDirection={"column"}
      id="contact"
      px="15%"
      width={"100%"}
      margin={"auto"}
      justify="center"
    >
      <Flex
        marginTop={30}
        marginBottom={"10px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color={"white"}
        justify={"center"}
        fontFamily={"Franklin Gothic Medium"}
      >
        {/**/}
        <Box textShadow="3px 2px red" borderBottom="3px solid white">
          Contact Me
        </Box>
      </Flex>
      <form
        action="https://getform.io/f/b434cd75-9507-44a9-8c2e-b23c7076ae39"
        method="POST"
      >
        <Box
          m="auto"
          w={["100%", "90%", "70%", "70%"]}
          bg="black"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
          p="10px"
          borderRadius="lg"
        >
          <Box m={5} color="#0B0E3F">
            <VStack color={"white"} spacing={3}>
              <FormControl id="name">
                <FormLabel fontSize={["16px", "18px", "20px", "20px"]}>
                  Your Name
                </FormLabel>
                <InputGroup borderColor="blue.500">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input name="Name" type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel fontSize={["16px", "18px", "20px", "20px"]}>
                  Mail
                </FormLabel>
                <InputGroup borderColor="blue.500">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input name="Mail" type="email" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel fontSize={["16px", "18px", "20px", "20px"]}>
                  Message
                </FormLabel>
                <Textarea
                  name="Message"
                  borderColor="blue.500"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Write here"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button type="submit" className="btn-5" color={"black"}>
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </form>

      {/* */}
      <Grid
        w="60%"
        m="auto"
        templateColumns="repeat(1, 1fr)"
        gap={1}
        mt="-60px"
      >
        <GridItem colSpan={1}>
          <Flex marginTop="80px" color={"white"} justify={"center"} gap={8}>
            <Box>
              <a href="https://github.com/nileshsingh72" target="_blank">
                <BsGithub fontSize={"30px"} />
              </a>
            </Box>
            <Box>
              <a href="mailto: rnileshchauhan89@gmail.com" target="_blank">
                <HiMail fontSize={"30px"} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/in/nileshsingh99/"
                target="_blank"
              >
                <BsLinkedin fontSize={"30px"} />
              </a>
            </Box>
          </Flex>
        </GridItem>
        <GridItem color={"white"} textShadow="1px 2px black" colSpan={1}>
          <Flex flexDirection={"column"} justify={"center"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              fontWeight={"500"}
            >
              Call: +91 7974176492
            </Text>
            <Text textAlign={"center"} fontWeight={700}>
              Design by : Nileshsingh Chauhan
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
