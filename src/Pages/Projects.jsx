import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://assets.awwwards.com/awards/submissions/2018/12/5c0ca7e23b974.png",
    caption: "Indian Express",
    description:
      "Indian Express Limited is an Indian news media publishing company.Completed project in 5 days and learned lots of new things being a part of team as a member",
    languages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        w: "20%",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        w: "15%",
      },
      { src: "https://avatars3.githubusercontent.com/u/1371101?v=4", w: "20%" },
    ],
    github: "https://github.com/deepakkumarfathkar/Indian_Express_Clone",
    live: "https://magenta-creponne-daa21d.netlify.app/",
    video: "",
  },
  {
    url: "https://d341ezm4iqaae0.cloudfront.net/assets/2021/10/03190032/post-job-screen-e1659553390420.jpg",
    caption: "Indeed",
    description:
      "Indeed.com is an recruitment platform that provides hiring-related services to job seekers / corporates and recruiters. Completed project in 5 days and learned lots of new things.",
    languages: [
      {
        src: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
        w: "20%",
      },
      {
        src: "https://jquery-plugins.net/image/plugin/chakra-ui-simple-modular-accessible-ui-components-for-react-applications.png",
        w: "35%",
      },
    ],
    github: "https://github.com/nileshsingh72/Clone-Indeed.com",
    live: "https://strong-souffle-576a35.netlify.app/",
    video: "",
  },
  {
    url: "https://viatravelers.com/wp-content/uploads/2021/05/Expedia-Hotels.jpg.webp",
    caption: "Expedia",
    description:
      "An American online travel shopping company for consumer and also provides Vacation offers. Completed project in 6 days. Used Authentication login page.",
    languages: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        w: "20%",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        w: "15%",
      },
      { src: "https://avatars3.githubusercontent.com/u/1371101?v=4", w: "20%" },
    ],
    github: "https://github.com/nileshsingh72/Clone-Expedia.com",
    live: "https://expedia-three.vercel.app",
    video: "",
  },
];
export default function Projects() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="projects">
      <br />
      <br />
      <br />
      <Flex
        marginBottom={"80px"}
        // marginTop={"50px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        // fontFamily={"Roboto Mono"}
        color="#2B6CB0"
        justify={"center"}
        fontWeight={600}
      >
        {/**/}
        <Box borderBottom="5px solid #2B6CB0" py="5px">
          My Projects
        </Box>
      </Flex>

      <Box
        m="auto"
        margin={{ base: "auto auto", sm: "auto auto", md: "auto 10%" }}
        mt="50px"
      >
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div
                  style={{ textAlign: "center" }}
                  className="image-container"
                >
                  <Grid
                    // border="2px solid red"
                    border={"5px solid #4299E1"}
                    w={"90%"}
                    templateColumns={{
                      base: "100%",
                      sm: "100%",
                      md: "50% 50%",
                    }}
                    alignItems="center"
                    m="auto"
                    borderRadius="20px"
                    boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  >
                    <GridItem
                      // border="2px solid  brown"

                      m="auto 10px"
                      placeItems={"center"}
                    >
                      <Link
                        target={"_blank"}
                        href={fadeImage.live}
                        alt={fadeImage.caption}
                      >
                        <Flex align={"center"} justify={"center"}>
                          <Image
                            w={{ base: "400px", sm: "400px", md: "500px" }}
                            src={fadeImage.url}
                            alt={fadeImage.caption}
                          />
                        </Flex>
                      </Link>
                    </GridItem>
                    <GridItem
                      // border="2px solid brown"
                      w="90%"
                      m="auto"
                    >
                      <Text
                        fontSize={"4xl"}
                        color="black"
                        as="b"
                      >{`${fadeImage.caption}.com`}</Text>
                      <br />
                      <Text
                        fontSize={{ base: "md", md: "20px", lg: "23px" }}
                        color={"#2B6CB0"}
                        textAlign="start"
                        fontWeight={"600"}
                        fontFamily={"Franklin Gothic Medium"}
                      >
                        {fadeImage.description}
                      </Text>
                      <br />
                      <Flex
                        m="auto"
                        justify={"space-between"}
                        align="center"
                        w="80%"
                        // border={"1px solid red"}
                      >
                        <Text
                          as="b"
                          fontSize={{ base: "md", md: "20px", lg: "23px" }}
                          color="black"
                        >
                          Tech Stacks:{" "}
                        </Text>
                        {fadeImage.languages.map((img, index) => {
                          return (
                            <img width={img.w} key={index} src={img.src} />
                          );
                        })}
                      </Flex>
                      <br />
                      <Flex
                        mb="50px"
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Link target={"_blank"} href={fadeImage.live}>
                          <Image
                            pl="10px"
                            src="https://i.ibb.co/vsw8tWb/website.png"
                            alt={""}
                          ></Image>
                        </Link>
                        {/* <Link target={"_blank"} href={fadeImage.video}>
                          <Image
                            pl="10px"
                            src="https://i.ibb.co/3WnfsMF/video.png"
                            alt={""}
                          ></Image>
                        </Link> */}
                        <Link target={"_blank"} href={fadeImage.github}>
                          <Image
                            pl="10px"
                            src="https://i.ibb.co/ZLskdcS/githube.png"
                            alt={""}
                          ></Image>
                        </Link>
                      </Flex>
                    </GridItem>
                  </Grid>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </Box>
    </Box>
  );
}
