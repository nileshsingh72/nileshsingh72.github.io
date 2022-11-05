import { Box, Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
export default function Git() {
  const calender = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

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
        // minH={"100vh"}
        marginBottom={"20px"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        // fontFamily={"Roboto Mono"}
        color="#2B6CB0"
        justify={"center"}
        pt={"50px"}
        fontWeight={600}
      >
        {/**/}
        <Box marginBottom={"20px"} borderBottom="5px solid #2B6CB0" py="5px">
          Github Statistics
        </Box>
      </Flex>
      <Flex
        justify={"center"}

        //   border="2px solid red"
      >
        <Flex flexDirection={"column"} align="center">
          <Flex
            //   border="2px solid red"
            justify={"center"}
            width="100%"
          >
            {" "}
            <GitHubCalendar username="nileshsingh72" transformData={calender} />
            {/* <img
              //   height="200px"
              src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nileshsingh72"
            /> */}
          </Flex>
          <Flex
            justify={"center"}
            align={"center"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <img
              height="200px"
              width={"49%"}
              src="https://github-readme-stats.vercel.app/api?username=nileshsingh72&show_icons=true&theme=zenburn"
              alt="nilesh"
            />

            <img
              height="200px"
              width={"49%"}
              src="https://github-readme-streak-stats.herokuapp.com/?user=nileshsingh72&theme=zenburn"
              alt="nilesh"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
