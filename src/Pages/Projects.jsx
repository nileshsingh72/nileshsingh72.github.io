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
import "react-slideshow-image/dist/styles.css";
import { BsEyeFill} from "react-icons/bs"
import { FaCode } from "react-icons/fa"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandJavascript } from "react-icons/tb"
import { DiCss3 } from "react-icons/di"
import { RiReactjsFill } from "react-icons/ri"
import { SiChakraui } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { IoLogoNodejs} from "react-icons/io"
import { Expedia, indianexpress, indeed  , activitytrackerposter , weatherposter} from "../posters"

const myarray = [
    {
      project: "IndianExpress.com (Collaborative)",
      url: indianexpress,
      description:
        "Indian Express Limited is an Indian news media publishing company.Completed in 5 days and learned lots of new things being a part of team as a member",
      
      github: "https://github.com/deepakkumarfathkar/Indian_Express_Clone",
      live: "https://magenta-creponne-daa21d.netlify.app/",
      video: "",
      stacks: [<AiOutlineHtml5/> , <DiCss3/> ,<TbBrandJavascript/>]
    },
    {
      project: "Indeed.com (Indiviual)",
      url: indeed,
      description:
        "Indeed.com is an recruitment platform that provides hiring-related services to job seekers, corporates and recruiters. Completed in 5 days and learned lots of new things.",
      github: "https://github.com/nileshsingh72/Clone-Indeed.com",
      live: "https://strong-souffle-576a35.netlify.app/",
      video: "",
     stacks: [  <AiOutlineHtml5/> , <DiCss3/> , <TbBrandJavascript/> , <SiChakraui/> , <RiReactjsFill /> ]


    },
    {
      project: "Expedia.com (Indiviual)",
      url: Expedia,
      description:
        "An American online travel shopping company for consumer and also provides Vacation offers. Completed in 6 days. Used Authentication login page.",
      github: "https://github.com/nileshsingh72/Clone-Expedia.com",
      live: "https://expedia-three.vercel.app",
      video: "",
      stacks: [<AiOutlineHtml5/> , <DiCss3/> ,<TbBrandJavascript/>]


    },
    {
      project: "ActivityTracker.com (Collaborative)",
      url: activitytrackerposter,
      caption: "ActivityTracker",
      description:
        "It is a desktop and mobile time tracking app for companies and freelancers to measure their work productivity. Completed in 5 days.",
      github: "https://github.com/Faizan7012/frightening-river-6696",
      live: "https://activity-tracker-orpin.vercel.app/",
      video: "",
      stacks: [ <TbBrandJavascript/> , <SiChakraui/> , <RiReactjsFill /> , <DiMongodb  /> , <IoLogoNodejs/>]

    },
     {
      project: "Weather-App (Indiviual)",
      url: weatherposter,
      description:
        "It is my first project, weather app used OpenWeatherMap Api's, shows dynamic time and weather of cities",
      github: "https://github.com/nileshsingh72/WeatherApp",
      live: "https://weatherapp-seven-gamma.vercel.app/",
      video: "",
      stacks: [<AiOutlineHtml5/> , <DiCss3/> ,<TbBrandJavascript/>]


    },
  ];
export default function Projects() {
  return (
    <>
      <Box id="projects">
        <br />
        <br />
        <br />
        <Flex
          marginBottom={"80px"}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          color={"white"}
          fontFamily={"Franklin Gothic Medium"}
          justify={"center"}
        >
          {/**/}
          <Box   textShadow='3px 2px red' borderBottom="3px solid white" py="5px">
            My Projects
          </Box>
        </Flex>
        {/* <Project_Card /> */}

<Grid templateColumns={['repeat(1, 1fr)' , 'repeat(1, 1fr)' , 'repeat(2, 1fr)' , 'repeat(3, 1fr)']} gap={6}>
 {myarray.map((el , i) => (
   <GridItem  ><Box key={i} 
   boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
   w="320px" bg="white"  m="auto"   p="15px"  borderRadius={"7px"}
   _hover={{
    transform:"scale(1.05)" , 
    transition:'0.3s ease-in-out'
   }}
   >
        <Flex  flexDirection={"column"} alignItems={"center"}  gap={4} >
          <Image  border={"1px solid black"}   borderRadius="6px" src={el.url} />
        <Text  textAlign={"center"}  color="black" fontSize={"22px"} >{el.project} </Text>
        
        <Text  textAlign={"center"} color="black" mt="-8px" > {el.description}</Text>
        <Flex  alignItems={"center"} >
          Tech Stacks : 
          <Flex  fontSize={"35px"}  
        // border={"1px solid black"} gap={3} 
        >
          {el.stacks?.map(element=> element)}
        </Flex>
        </Flex>
        
        <Flex  gap={3} fontSize={"25px"}  w="60%"   justifyContent={"space-around"} >
          <Link   target={"_blank"} href={el.live} >
          <BsEyeFill  
          />
          </Link>
           <Link   target={"_blank"}href={el.github} > 
          <FaCode/>
          </Link>

        </Flex>
        </Flex>

      </Box></ GridItem>
 ))}
</Grid>
        
      </Box>
    </>
  );
}
function Project() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="projects">
      
    </Box>
  );
}
