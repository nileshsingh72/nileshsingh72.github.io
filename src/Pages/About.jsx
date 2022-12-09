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
    <Box 
    // className="Aboutcol"
    // bg="black"
>
    <Box
      id="about"
      w={["100", "100", "100", "80%"]}
      m="auto"
      minH={"70vh"}
      pt={"50px"}
      mt="20px"
    >
      <Flex
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        mb="20px"
        color={"white"}
        // color={"#DD6B20"}
        fontFamily={"Franklin Gothic Medium"}
        justify={"center"}
      >
        {/**/}
        <Box   textShadow='3px 2px red' borderBottom="3px solid white" py="5px">
          About me
        </Box>
      </Flex>

      <Stack
        minH={"30vh"}
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          w="80%"
          h="80%"
          alignItems={"center"}
          // border={"1px solid red"}
        >
          <Image
            w={["60%", "40%", "auto", "auto"]}
            objectFit={"cover"}
            borderRadius={"10%"}
            // border={"2px solid #2b6cb0"}
            pd="5px"
            // src={"https://i.ibb.co/87QFkwz/croped2-removebg-preview.png"}
            // src="https://i.ibb.co/vD21Pq0/croped2-removebg-preview-removebg-preview.png"
            // src="https://i.ibb.co/23JTttn/croped2-removebg-preview-removebg-preview-1.png"
            src="https://i.ibb.co/ggv9WjM/croped2-removebg-preview-removebg-preview-2.png"
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Flex
            color={"white"} 
            //  textShadow='1px 1px red' 
            // color={"#F56565"} 
            flexDirection={"column"} gap={5}>
              <Text
                // border={"1px solid red"}
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                textAlign="start"
                fontWeight={"600"}
                // fontFamily={"Franklin Gothic Medium"}
              >
                <li>
                  A passionate and competent Web Developer having hands on
                  experience on MERN stack, ready to learn new technologies and
                  alaways excited to solve problems.
                </li>
              </Text>
              <Text
                fontWeight={"600"}
                // fontFamily={"Franklin Gothic Medium"}
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                textAlign="start"
              >
                <li>
                  I have been learning and building Web Apps from last 6 months.
                  Well versed in coding using JavaScript and its frameworks.
                </li>{" "}
              </Text>
              <Text
                fontSize={{ base: "md", md: "20px", lg: "23px" }}
                textAlign="start"
                fontWeight={"600"}
                // fontFamily={"Franklin Gothic Medium"}
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
    </Box>
  );
}
