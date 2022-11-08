import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box id="about" minH={"100vh"} pt={"50px"}>
      <Flex
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        // fontFamily={"Roboto Mono"}
        color="#2B6CB0"
        justify={"center"}
        fontWeight={600}
      >
        {/**/}
        <Box borderBottom="5px solid #2B6CB0" py="5px">
          About me
        </Box>
      </Flex>

      <Stack minH={"30vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          // border={"1px solid red"}
        >
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            borderRadius={"10%"}
            border={"2px solid black"}
            src={"https://i.ibb.co/87QFkwz/croped2-removebg-preview.png"}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Flex flexDirection={"column"} gap={5}>
              <Text
                // border={"1px solid red"}
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                color={"#2B6CB0"}
                textAlign="start"
                fontWeight={"600"}
                fontFamily={"Franklin Gothic Medium"}
              >
                <li>
                  A passionate and competent Web Developer having hands on
                  experience on MERN stack, ready to leanr new technologies and
                  alaways excited to solve problems.
                </li>
              </Text>
              <Text
                fontWeight={"600"}
                fontFamily={"Franklin Gothic Medium"}
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                textAlign="start"
                color={"#2B6CB0"}
              >
                <li>
                  I have been learning and building Web Apps from last 6 months.
                  Well versed in coding using JavaScript and its frameworks.
                </li>{" "}
              </Text>
              <Text
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                color={"#2B6CB0"}
                textAlign="start"
                fontWeight={"600"}
                fontFamily={"Franklin Gothic Medium"}
              >
                <li>
                  Being from Non-CS background dream to be Web Developer was not
                  easy but after journey at Masai School, I am confident about
                  all skills essential in building Web Apps and loves to learn
                  new things everyday.
                </li>
              </Text>
            </Flex>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
            ></Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
