import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

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
      <Box bg="#2B6CB0" position="fixed" width={"100%"} zIndex={10} px={4}>
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
            <Box>
              <Image
                src="https://txt.1001fonts.net/img/txt/dHRmLjcyLjAwMDAwMC5UbWxzWlhOby4w/allura.regular.webp"
                alt="name"
                width="70%"
                height="70%"
                borderRadius={"20%"}
                paddingX={3}
                paddingY={3}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={1}
              width="55%"
              textColor="white"
              fontFamily={("Roboto Mono", "monospace")}
              justifyContent="space-between"
              // border={"1px solid yellow"}
              fontSize={{ base: "15px", md: "20px", lg: "25px" }}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link color="black" smooth={true} duration={500} to={link.path}>
                  <Button
                    key={link.path}
                    bg="none"
                    color="black"
                    fontSize={{
                      base: "10px",
                      sm: "10px",
                      md: "17px",
                      lg: "20px",
                    }}
                    _hover={{
                      background: "white",
                      color: "#2C5282",
                    }}
                    border={"1px solid grey"}
                  >
                    {link.title}
                  </Button>
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
