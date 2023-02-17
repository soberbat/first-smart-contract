import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();


const { PRIVATE_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks:{
    goerli:{
      url:"https://goerli.infura.io/v3/8fc01154abf947a486a5948e8f5f5c1f",
      accounts:[PRIVATE_KEY as string]
    }
  }
};

export default config;
