import { useState } from "react";
import { ethers } from "ethers";

const connectWallet = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const chainId = await signer.getChainId();

    if (chainId !== "0xa4b1") {
      try {
        await provider.send("wallet_switchEthereumChain", [
          { chainId: "0xa4b1" },
        ]);
      } catch (error) {
        console.error("Error requesting account switch:", error);
        return;
      }
    }

    const address = await signer.getAddress();
    const truncatedAddress = address.slice(0, 4) + ".." + address.slice(-2);
    return { signer, address: truncatedAddress };
  } catch (error) {
    console.log("Error Connecting: ", error);
    return null;
  }
};

const disconnectWallet = async () => {
  try {
    // Reset signer and other related state
    setWalletInfo(null);
  } catch (error) {
    console.log("Error disconnecting wallet:", error);
  }
};


export { connectWallet, disconnectWallet };