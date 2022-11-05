import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Box
      id="contact"
      width={"70%"}
      margin={"auto"}
      minH={"40vh"}
      // paddingTop={70}
      paddingBottom={70}
      marginTop={5}
      marginBottom={5}
      // border="1px solid red"s
    >
      <Flex justify={"center"}>
        <Text
          fontSize={{ base: "20px", md: "25px", lg: "40px" }}
          fontWeight={"600"}
          borderBottom="5px solid #2B6CB0"
          py="5px"
          color="#2B6CB0"
          marginBottom={19}
        >
          Get in Touch
        </Text>
      </Flex>
      <Flex justify={"center"}>
        <Text
          fontSize={{ base: "17px", md: "20px", lg: "28px" }}
          fontWeight={"500"}
          color="#4299e1"
        >
          Nilesh Singh Chauhan
        </Text>
      </Flex>
      <Flex justify={"center"}>
        <Text
          fontSize={{ base: "12px", md: "15px", lg: "20px" }}
          fontWeight={"500"}
          color="#4299e1"
        >
          Call: +91 7974176492
        </Text>
      </Flex>
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
    </Box>
  );
}

//
