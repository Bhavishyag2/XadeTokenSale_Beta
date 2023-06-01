import { Flex, Box, Image, Text, Button, Input } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { ethers } from "ethers";
import { Alchemy, Network} from "alchemy-sdk";
//import { Web3Button } from "@web3modal/react";
import { useState, useEffect, SetStateAction, ChangeEvent } from "react";
import { Web3Button } from "@web3modal/react";

// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const abi = require("./abi.json");
const usdcABI = require("./usdc_abi.json");



export default function MainSwapper() {

  

  function connectMetamask() {
    try{
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: SetStateAction<string>[]) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  }
    catch(err){
      console.log("Please install metamask extension!!");
    }
  }

  // function walletConnect(){
  //   return <Web3Button />;
  //   }

  const accountChangeHandler = (account: SetStateAction<string>) => {
    // Setting an address data
    setAddress(account);
    // Setting a balance
    
  };

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any"); 
  const signer = provider.getSigner();
  const CONTRACT_ADDRESS = "0x5b19790a564a998163917A4aaA8209415fF7Cc01";
  const USDC_Address = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  const mintContract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  const usdcContract = new ethers.Contract(USDC_Address,usdcABI, signer);
  // const config = {
  //   apiKey: 'HkEMgIY7SNEbRty-LlAlaG_wvlxMq7YA',
  //   network: Network.MATIC_MAINNET,
  // };
  // const alchemy = new Alchemy(config);   

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  // console.log(mintContract.token);

  // const abc = mintContract.balance();
  // console.log(abc);


  
  const handleAddressChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  
  const handleAmountChange = (event:ChangeEvent<HTMLInputElement> ) => {
    setAmount(event.target.value);
    //console.log(event);
  };

  async function purchaseVeTokens() {
    const value = /*ethers.utils.parseEther(amount)*/ ethers.utils.parseUnits(amount, "mwei");
    
    const balance = await usdcContract.balanceOf(address);
    if(balance < value){
      console.log("Balance is less than the amount requested to swap."); 
      return;
    }
    const allowed = await usdcContract.allowance(address, CONTRACT_ADDRESS);
    if(allowed < value){
    try{  
    const approval = await usdcContract.approve(CONTRACT_ADDRESS,value); // call to approve the contract to spend on behalf of user
    approval.wait();
    }
    catch(err){
      console.log("User denied signing metamask transaction!!");
    }
    }
    try{
    const txData = await mintContract.purchaseTokens(address, value /*Number(amount)*/); 
    txData.wait();
    }
    catch(err){
      console.log("User denied signing metamask transaction!!");
    }
  }


  return (
    <Box
      id="mainBox"
      w={{ sm: "20rem", md: "24rem", lg: "32rem" }}
      mx="auto"
      mt="5.25rem"
      boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
      borderRadius="1.37rem"
    >
      <Flex
        alignItems="center"
        p="1rem 1.25rem 0.5rem"
        bg="#111"
        color="rgb(86, 90, 105)"
        justifyContent="space-between"
        borderRadius="1.37rem 1.37rem 0 0"
      >
        <Text fontSize="2xl" color="white" fontWeight="800">
          Buy XADE Tokens
          <br />
        </Text>
      </Flex>

      <Box p="0.5rem" bg="#111" borderRadius="0 0 1.37rem 1.37rem">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          bg="#222"
          p="1rem 1rem 1.7rem"
          borderRadius="1.25rem"
        >
          <Box>
            <Button
              bg="#333"
              borderRadius="1.12rem"
              boxShadow="rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem"
              fontWeight="500"
              mr="0.5rem"
              color="white"
            >
              <Image
                boxSize="1.5rem"
                src={"https://cryptologos.cc/logos/usd-coin-usdc-logo.png"}
                mr="0.5rem"
              />
              USDC
            </Button>
          </Box>
          <Box>
            <Input
              placeholder="0.0"
              fontWeight="500"
              fontSize="1.5rem"
              width="100%"
              size="19rem"
              textAlign="right"
              bg="#222"
              outline="none"
              border="none"
              color="white"
              focusBorderColor="none"
              type="string"
              value={amount} 
              onChange={handleAmountChange}
            />
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          bg="#222"
          pos="relative"
          p="1rem 1rem 1.7rem"
          borderRadius="1.25rem"
          mt="0.25rem"
        >
          <Box>
            <Button
              bg="#333"
              borderRadius="1.12rem"
              boxShadow="rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem"
              fontWeight="500"
              color="white"
              mr="0.5rem"
            >
              <Image
                boxSize="1.5rem"
                src={"https://www.xade.finance/favicon.ico"}
                mr="0.5rem"
              />
              XUSD
            </Button>
          </Box>
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="#222"
            p="0.18rem"
            borderRadius="0.75rem"
            pos="relative"
            top="-2.37rem"
            left="2.5rem"
          >
            <ArrowDownIcon
              bg="#222"
              color="rgb(128,128,128)"
              h="1.5rem"
              width="1.62rem"
              borderRadius="0.75rem"
            />
          </Flex>
          <Box>
            <Input
              placeholder="0.0"
              fontSize="1.5rem"
              width="100%"
              size="19rem"
              textAlign="right"
              bg="#222"
              color="white"
              outline="none"
              border="none"
              focusBorderColor="none"
              type="string"
              value={address} onChange={handleAddressChange}
            />
          </Box>
        </Flex>
        <br />
        <Flex
          alignItems="left"
          justifyContent="left"
          p="0.18rem"
          pos="relative"
          color="white"
          fontWeight="800"
          fontSize={{ base: "1.2rem", md: "1.3rem", lg: "1.3rem" }}
        >
          The lot sizes are as follows:
        </Flex>
        <Flex
          alignItems="left"
          justifyContent="left"
          p="0.18rem"
          pos="relative"
          color="white"
          fontSize={{ base: "1.2rem", md: "1.3rem", lg: "1.3rem" }}
        >
          <ul style={{marginLeft:"1rem"}}>
            <li>less than $200: $0.0125 per token</li>
            <li>$200 to $2000: $0.01 per token</li>
            <li>$2000 to $20000: $0.009 per token </li>
            <li>$20000 to $100000: $0.0075 per token </li>
            <li>$100000 or above: $0.006 per token</li>
          </ul>
          <br />
        </Flex>
        <br />
        <Box mt="0.5rem">
          <Button
            color="rgb(255, 255, 255)"
            bg="#8787FF"
            width="100%"
            p="1.62rem"
            borderRadius="1.25rem"
            onClick = {connectMetamask}
          >
            Connect Metamask
          </Button>
        </Box>

        {/* <Box mt="0.5rem">
          <Button
            color="rgb(255, 255, 255)"
            bg="#8787FF"
            width="100%"
            p="1.62rem"
            borderRadius="1.25rem"
            onClick = {walletConnect}
          >
            Wallet Connect
          </Button>
        </Box> */}

        <Box mt="0.5rem">
          <Button
            color="rgb(255, 255, 255)"
            bg="#8787FF"
            width="100%"
            p="1.62rem"
            borderRadius="1.25rem"
            onClick = {purchaseVeTokens}
          >
            Buy $XADE
          </Button>
        </Box>

      </Box>
      <br />
      <br />
    </Box>
  );
}
