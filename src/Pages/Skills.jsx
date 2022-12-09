import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Box minH={"100vh"} id="skills"    pt={"50px"}>
      <Box>
        <Flex
          marginBottom={"20px"}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
         color={"white"}
          fontFamily={"Franklin Gothic Medium"}
          justify={"center"}
          // fontWeight={400}
        >
          {/**/}
          <Box  textShadow='3px 2px red' borderBottom="3px solid white" py="5px">
            Technical Skills
          </Box>
        </Flex>
        <SimpleGrid
          width={["50%", "70%", "70%", "70%"]}
          margin={"auto"}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          gap={5}
        >
          {/* ; */}
          <GridItem
            borderRadius={"12px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
            bg="white" 
            py={"10%"}
            align={"center"}
          >
            <img
              width="50%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
          >
            <img
              width="35%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://avatars3.githubusercontent.com/u/1371101?v=4"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            pl="20px"
            align={"center"}
            justify={"center"}
          >
            <img
              width="100%"
              src="https://i.ibb.co/s150G6V/express-logo-removebg-preview.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img width="50%" src="https://i.ibb.co/X4d9v9J/nodejs.png" alt="" />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img width="50%" src="https://i.ibb.co/3NpGM9K/git.png" alt="" />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="60%"
              // src="https://i.ibb.co/WfjsWyz/chakra-ui.png"
              src="https://i.ibb.co/GWCyMfQ/chakra-ui-removebg-preview.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"12px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="40%"
              src="https://i.ibb.co/HXPmTLz/download-2.png"
              alt=""
            />
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
