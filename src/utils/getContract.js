import { ethers } from "ethers";
import { STAKING_CONTRACT_ADDRESS, abi } from "../constants";

const rpcUrl = "https://rpc-mumbai.maticvigil.com";

const getContract = (
  isSigner = false,
  address = STAKING_CONTRACT_ADDRESS,
  ABI = abi
) => {
  const providerSigner = new ethers.providers.Web3Provider(window.ethereum);
  const signer = providerSigner.getSigner();
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const newProvider = isSigner ? signer : provider;
  return new ethers.Contract(address, ABI, newProvider);
};

export default getContract;
