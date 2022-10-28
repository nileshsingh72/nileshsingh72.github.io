import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Skills() {
  return (
    <Box id="skills" pt={"50px"}>
      <Box>
        <Flex
          marginBottom={"20px"}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontFamily={"Roboto Mono"}
          color="#805AD5"
          justify={"center"}
          fontWeight={800}
        >
          {/**/}
          <Box borderBottom="5px dashed #805AD5" py="5px">
            Technical Skills...{" "}
          </Box>
        </Flex>
        <SimpleGrid
          width="70%"
          margin={"auto"}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        >
          <GridItem py={"15%"} align={"center"}>
            <img
              width="50%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"}>
            <img
              width="35%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img
              width="45%"
              src="https://avatars3.githubusercontent.com/u/1371101?v=4"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img
              width="45%"
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img
              width="45%"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img
              width="100%"
              src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"
              alt=""
            />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img width="50%" src="https://i.ibb.co/X4d9v9J/nodejs.png" alt="" />
          </GridItem>
          <GridItem py={"15%"} align={"center"} justify={"center"}>
            <img width="50%" src="https://i.ibb.co/3NpGM9K/git.png" alt="" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
