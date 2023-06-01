import { Flex, Box } from "@chakra-ui/react";

export default function UtilitiesAndTable() {
  const data = [
    { name: "Data Point 1", value: 300 },
    { name: "Data Point 2", value: 50 },
    { name: "Data Point 3", value: 100 },
    { name: "Data Point 4", value: 80 },
  ];

  const COLORS = ["#FF6384", "#36A2EB"];
  return (
    <Box mt={{ base: "1rem", md: "-4rem", lg: "-4rem" }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-between" }}
        alignItems="center"
        height={{ base: "auto", lg: "100vh" }}
      >
        <Box w={{ base: "100%", lg: "45%" }} p={4}>
          <Flex
            alignItems="left"
            justifyContent="left"
            p="0.18rem"
            pos="relative"
            color="white"
            fontWeight="700"
            fontSize={{ base: "2.5rem", md: "2.7rem", lg: "2.7rem" }}
          >
            Utilities
            <br />
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
              <li style={{ marginBottom: '15px' }}>Reduced fees on the platform based on token holdings</li>
              <li  style={{ marginBottom: '15px' }}>Governance for our money market(lending) protocol SabeX</li>
              <li style={{ marginBottom: '15px' }}>
                Rewards token to get exclusive offers, discounts, and other
                perks on the Xade platform
              </li>
            </ul>
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
            mt={{ base: "1.3rem", md: "12rem", lg: "10rem" }}
          >
            Fees Discount based on Token Holdings
          </Flex>
          <Flex
            alignItems={{ base: "left", md: "left", lg: "left" }}
            justifyContent={{ base: "left", md: "left", lg: "left" }}
            p="0.18rem"
            pos="relative"
            color="white"
            fontSize={{ base: "1.25rem", md: "1.3rem", lg: "1.3rem" }}
            mt="1.5rem"
          >
            <table
              style={{ backgroundColor: "black", borderCollapse: "collapse" }}
            >
              <thead>
                <tr style={{ color: "white" }}>
                  <th style={{ backgroundColor: "#313145", padding: "10px" }}>
                    Xade Token(USD)
                  </th>
                  <th style={{ backgroundColor: "#2a2a38", padding: "10px" }}>
                    Discount in Xade fees
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $10
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    2%
                  </td>
                </tr>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $100
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    5%
                  </td>
                </tr>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $1,000
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    10%
                  </td>
                </tr>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $10,000
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    25%
                  </td>
                </tr>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $100,000
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    45%
                  </td>
                </tr>
                <tr style={{ color: "white" }}>
                  <td style={{ backgroundColor: "#1d1d28", padding: "10px" }}>
                    $1,000,000
                  </td>
                  <td style={{ backgroundColor: "#181820", padding: "10px" }}>
                    75%
                  </td>
                </tr>

                {/* Additional rows go here */}
              </tbody>
            </table>

            <br />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
