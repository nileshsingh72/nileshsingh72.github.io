import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import styles from "../moduleCss/Navbar.module.css";
const Links = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Skills",
    path: "skills",
  },
  ,
  {
    title: "Projects",
    path: "projects",
  },
  ,
  {
    title: "Contact",
    path: "contact",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
      // className="navcol"
        bg="black"
        position="fixed"
        width={"100%"}
        zIndex={10}
        px={4}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        pb="5px"
      >
        <Flex
          h={16}
          alignItems={"center"}
          // border={"1px solid red"}
        >
          <IconButton
            bg="#2C5282"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon color={"white"} />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            width="100%"
            justifyContent="space-between"
            alignItems={"center"}
            paddingRight="25px"
          >
            <Link to="home" smooth={true} duration={1000}>
              {/* <Image
                src="https://txt.1001fonts.net/img/txt/dHRmLjcyLjAwMDAwMC5UbWxzWlhOby4w/allura.regular.webp"
                alt="name"
                width="70%"
                height="70%"
                borderRadius={"20%"}
                paddingX={3}
                paddingY={3}
              /> */}
              {/* <Avatar src="https://avatars.githubusercontent.com/u/107462262?v=4" /> */}
              <Avatar ml="25px" src="https://i.ibb.co/yWrWZT3/avatarme.png" />
            </Link>
            <HStack
              as={"nav"}
              spacing={1}
              width="55%"
              textColor="white"
              fontFamily={"sans-serif"}
              justifyContent="space-between"
              // border={"1px solid yellow"}
              fontSize={{ base: "15px", md: "20px", lg: "25px" }}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link smooth={true}
                color = "white"
                duration={500} to={link.path}>
                  {/* <Button
                    className={styles.btn}
                    key={link.path}
                      

                    bg="none"
                    fontSize={{
                      base: "10px",
                      sm: "10px",
                      md: "17px",
                      lg: "20px",
                    }}
                    // _hover={{
                    //   fontSize: "25px",
                    //   wordSpacing: "10px",
                    // }}
                    border={"1px solid grey"}
                  > */}
                    {link.title}
                  {/* </Button> */}
                </Link>
                // </Button>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"start"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link onClick={isOpen ? onClose : onOpen} to={link.path}>
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
