import { Flex, Box } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Label, Legend, Tooltip } from "recharts";

export default function PieSchedule() {
  const data = [
    { name: "Rewards", value: 37.5 },
    { name: "Team and future team", value: 20 },
    { name: "Sale", value: 20 },
    { name: "Liquidity Reserve", value: 10 },
    { name: "Treasury", value: 7.5 },
    { name: "Marketing and Development", value: 5 },
  ];

  const COLORS = [
    "#e39ff6",
    "#b65fcf",
    "#af69ef",
    "#a32cc4",
    "#7a4988",
    "#a32cc4",
  ];
  return (
    <Box mt={{ base: "1rem", md: "-7rem", lg: "-5.5rem" }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-between" }}
        alignItems="center"
        height={{ base: "auto", lg: "100vh" }}
      >
        <Box w={{ base: "100%", lg: "45%" }} p={4}>
          <Flex
            alignItems={{ base: "left", md: "left", lg: "left" }}
            justifyContent={{ base: "left", md: "left", lg: "left" }}
            p="0.18rem"
            pos="relative"
            color="white"
            fontWeight="700"
            fontSize={{ base: "2.5rem", md: "2.7rem", lg: "2.7rem" }}
            mt={{ base: "1.3rem", md: "16.5rem", lg: "17rem" }}
          >
            Token Distribution
          </Flex>
          <Flex
            alignItems="left"
            justifyContent="left"
            p="0.18rem"
            pos="relative"
            color="white"
            fontWeight="700"
            fontSize={{ base: "0.7rem", md: "2.5rem", lg: "0.85rem" }}
            mt="1.5rem"
          >
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={150}
                fill="#8884d8"
                stroke="none"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
            <br />
          </Flex>
        </Box>
        <Box w={{ base: "100%", lg: "45%" }} p={4}>
          <Flex
            alignItems={{ base: "left", md: "left", lg: "left" }}
            justifyContent={{ base: "left", md: "left", lg: "left" }}
            p="0.18rem"
            pos="relative"
            color="white"
            fontWeight="700"
            fontSize={{ base: "2.5rem", md: "2.7rem", lg: "2.7rem" }}
            mt={{ base: "1.3rem", md: "16.5rem", lg: "16.5rem" }}
          >
            Vesting Schedule
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            p="0.18rem"
            pos="relative"
            color="white"
            fontSize={{ base: "1.25rem", md: "1.5rem", lg: "1.5rem" }}
            mt="1.5rem"
          >
            <ul style={{ listStylePosition: 'inside', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
              <b>Team</b> - vesting period for 6 years with 25% tokens unlocking
                after lst year and 15% unlocking after the 2nd year;
              </li>
              <li style={{ marginBottom: '15px' }}>
                <b>marketing and development</b> - 25% of Tokens unlock every year;
              </li>
              <li style={{ marginBottom: '15px' }}>
              <b>investors</b> - 15% of all tokens to have a vesting period of 1
                year;
              </li>
              <li style={{ marginBottom: '10px' }}>
              <b>rewards</b> - only 33.33% of all tokens allocated for rewards can be
                unlocked every year.
              </li>
            </ul>
            <br />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
