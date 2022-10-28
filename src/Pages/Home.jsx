import {
  Flex,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";

import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  const text = Typewriter({
    words: [
      "< Frontend Developer />",
      "< Backend Developer />",
      "< Full-Stack Web Developer />",
    ],
    loop: {},
  });

  return (
    <>
      <br />
      <br />

      <Flex
        id="home"
        flex={1}
        px={10}
        align="center"
        flexDirection={{ base: "column", md: "coloum", lg: "row" }}
      >
        <Box w={{ base: "80%", md: "80%", lg: "50%" }}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            // border={"1px solid red"}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"120%"}
            >
              Hi,{"  "}
              <Text
                color={"#2C5282"}
                fontWeight={650}
                display={"inline-border"}
              >
                I'm NileshSingh Chauhan
              </Text>
              <Box h={"40px"}>
                <Text
                  color={"#805AD5"}
                  fontWeight={800}
                  fontFamily="monospace"
                  fontSize={{ base: "1xl", sm: "2xl", md: "4xl" }}
                >
                  {text}
                </Text>
              </Box>
            </Heading>
            <Stack spacing={6} direction={"row"}>
              <Button
                px={8}
                py={7}
                fontSize="3xl"
                color={"black"}
                fontFamily={("Roboto Mono", "monospace")}
                bg="#4299E1"
                position={"static"}
                _hover={{ bg: "#2B6CB0", color: "white" }}
              >
                My Resume
                {/* </a> */}
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box w="50%" p="6%">
          <img
            src="https://i.ibb.co/56jVjWt/web-design-4942380-4122478-1.gif"
            alt="web-design-4942380-4122478-1"
          />
        </Box>
      </Flex>
    </>
  );
}
