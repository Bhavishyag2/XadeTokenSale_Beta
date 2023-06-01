import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import MainSwapper from "./components/Main";
import Navbar from "./components/Nav";
import UtilitiesAndTable from "./components/Utilities";
import Footer from "./components/Foot";
import PieSchedule from "./components/PieSched"
import "@fontsource/inter";
import "./global.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <br />
      <MainSwapper />
      <UtilitiesAndTable />
      <PieSchedule/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
