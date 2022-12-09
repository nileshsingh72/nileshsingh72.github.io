import { Box, Flex, GridItem, Grid } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
export default function Git() {
  const calender = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <>
      <Flex
        marginBottom={"20px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        justify={"center"}
        pt={"50px"}
        color={"white"}
          fontFamily={"Franklin Gothic Medium"}

      >
        <Box    textShadow='3px 2px red' borderBottom="3px solid white" marginBottom={"20px"}   py="5px">
          Github Statistics
        </Box>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" w="70%" m="auto" gap={2}>
        <GridItem colSpan={2}>
          <Flex color={"white"} justifyContent={"center"} w="full"  >
            <GitHubCalendar     username="nileshsingh72" transformData={calender} />
          </Flex>
        </GridItem>
        <GridItem 
        colSpan={["2", "2", "1", "1"]}>
          <img
            height="200px"
            // width={"49%"}
            color="black"
            src="https://github-readme-stats.vercel.app/api?username=nileshsingh72&show_icons=true&theme=swift"
            alt="nilesh"
          />
        </GridItem>
        <GridItem colSpan={["2", "2", "1", "1"]}>
          <img
            height="200px"
            // width={"49%"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=nileshsingh72&theme=swift"
            alt="nilesh"
          />
        </GridItem>
      </Grid>
    </>
  );
}

// <Flex justify={"center"}>
//   <Flex flexDirection={"column"} align="center">
//     <Flex border="2px solid red" justify={"center"} width="100%">
//       {" "}
//       <GitHubCalendar username="nileshsingh72" transformData={calender} />
//       {/* <img
//               //   height="200px"
//               src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nileshsingh72"
//             /> */}
//     </Flex>
//     <Flex
//       w="80%"
//       border="2px solid red"
//       justify={"center"}
//       align={"center"}
//       flexDirection={{
//         base: "column",
//         sm: "column",
//         md: "column",
//         lg: "row",
//       }}
//     >
//       <img
//         height="200px"
//         // width={"49%"}
//         color="black"
//         src="https://github-readme-stats.vercel.app/api?username=nileshsingh72&show_icons=true&theme=swift"
//         alt="nilesh"
//       />

//       <img
//         height="200px"
//         // width={"49%"}
//         src="https://github-readme-streak-stats.herokuapp.com/?user=nileshsingh72&theme=swift"
//         alt="nilesh"
//       />
//     </Flex>
//   </Flex>
// </Flex>;
