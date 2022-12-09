import { Flex, Box, Text, Image, Link, Button } from "@chakra-ui/react";
import styles from "../moduleCss/Home.module.css";
import Resume from "../assets/Nilesh_Singh_Chauhan_Resume.pdf";
import { FiDownload } from "react-icons/fi";
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
    <Box 
    w="100%"
    >
      <Flex
        minH={["auto", "auto", "70vh", "70vh"]}
        alignContent="center"
        justifyContent={"space-between"}
        id="home"
        w={["80%", "70%", "70%", "80%"]}
        m="auto"
            color={"white"}

        flexDirection={["column", "column", "column", "row"]}
       
      >
        <Flex
          py="17%"
          mt={["20px", "20px", "0", "0"]}
          w={["100%", "100%", "100%", "56%"]}
          px="10px"
          alignItems={"center"}
          // border="1px solid red"
          fontFamily={"Franklin Gothic Medium"}
          flexDirection={"column"}
          gap={["12px", "16px", "18px", "25px"]}
        >
          <Text
            mt={["15px", "0px", "0px", "0px"]}
            textAlign={"left"}
            // color={"#9B2C2C"}
            fontSize={["22px", "28px", "33px"]}
          >
            Hii,{" "}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={["20px", "26px", "40px"]}
            // color={"#9B2C2C"}
            color={"white"}
          >
            Nilesh Singh Chauhan
          </Text>
          <Box h="25px">
            <Text
              textAlign={"center"}
              fontSize={["17px", "24px", "26px"]}
              textShadow="0.5px 0.5px red"
              color={"black"}
            >
              {text}
            </Text>
          </Box>
          <Link
            mt={["15px", "15px", "18px", "20px"]}
            href="https://drive.google.com/file/d/1ypOQhWTxGYvXIKpVuF7YbOut6WLOmaC9/view?usp=sharing"
            target="_blank"
          >
            <Flex
              gap="2"
              py="3px"
              px="10px"
              borderRadius={"5px"}
              justifyContent={"space-between"}
              alignItems={"center"}
              _hover={{
                bg: "",
                border: "2px solid  black",
                fontSize: "26px",
              }}
              fontSize={["14px", "18px", "22px", "22px"]}
              // color={"blackAlpha.800"}
              bg="#FC8181"
            >
              My Resume
              <FiDownload />
            </Flex>
          </Link>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "44%"]}
          justifyContent={"center"}
          alignItems="center"
          // border="1px solid brown"
        >
          <Image src="https://i.ibb.co/18jVdfy/web-development-4518781-3743936.gif" />
        </Flex>
      </Flex>
    </Box>
  );
}
