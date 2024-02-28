
"use client";

import React, { useState, useEffect } from "react";
import { ethers, utils } from "ethers";

// Importing constants
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/app/constants";

// Component definition
function AccountForm() {
  // State variables
  const [tokenTotalSupply, setTokenTotalSupply] = useState("");
  const [yourWalletAddress, setYourWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [transactionType, setTransactionType] = useState('mint');
  const [inputValue, setInputValue] = useState({ address: "", amount: "" });

 
  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setYourWalletAddress(account);
      } else {
        setError("Install a MetaMask wallet.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleTokenMinting = async (event) => {
    event.preventDefault();
    try {
 
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  
        const amount = utils.parseEther(inputValue.amount);
        const txn = tokenContract.mint(amount);
        await txn.wait();

   
        const updatedTokenSupply = await tokenContract.totalSupply();
        const formattedTokenSupply = utils.formatEther(updatedTokenSupply);
        setTokenTotalSupply(formattedTokenSupply);
      } else {
        setError("Install a MetaMask wallet.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBurningToken =async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        const tokenOwner = tokenContract.owner();
        const amount = utils.parseEther(inputValue.amount)
   
        const txn =  tokenContract.burn(amount);
     

        const updatedTokenSupply = await tokenContract.totalSupply();
const formattedTokenSupply = utils.formatEther(updatedTokenSupply);
setTokenTotalSupply(formattedTokenSupply);
      } else {
      
        setError("Install a MetaMask wallet.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransferingToken = async (event) => {
    event.preventDefault();
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        const amount = utils.parseEther(inputValue.amount)
        const receiver = inputValue.address
    
        const txn =  tokenContract.transfer(receiver, amount);
      
        await txn.wait();
    

        const updatedTokenSupply = await tokenContract.totalSupply();
        const formattedTokenSupply = utils.formatEther(updatedTokenSupply);
        setTokenTotalSupply(formattedTokenSupply);

      } else {
        
        setError("Install a MetaMask wallet.");
      }
    } catch (error) {
      console.error(error);
    }
  };


 const handleTokenInformation = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const tokenOwner = await tokenContract.owner();

   
        let tokenSupply = await tokenContract.totalSupply();
      

        tokenSupply = utils.formatEther(tokenSupply)
      
        setTokenTotalSupply(tokenSupply);
        setTokenOwnerAddress(tokenOwner);
      }
    } catch (error) {
      console.error(error);
    }
  }

   const handleInputChange = async (event) => {
    setInputValue(prevFormData => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }


  
  useEffect(() => {
		checkIfWalletIsConnected();
		handleTokenInformation();
	}, [checkIfWalletIsConnected, handleTokenInformation]);

return (
    <div className="flex items-center justify-center min-h-screen bg-red-800 text-black">
      <div className="max-w-md mx-auto mt-8 p-4 rounded shadow-lg bg-gradient-to-r from-red-500 to-red-300 text-black">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Avax Token Supply: {tokenTotalSupply}</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2">Transaction Type</label>
            <select
              className="w-full p-2 border border-black rounded focus:outline-none bg-transparent focus:border-yellow-300 text-black"
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="mint">Mint</option>
              <option value="burn">Burn</option>
              <option value="transfer">Transfer</option>
            </select>
          </div>
          {transactionType === 'transfer' && (
            <div className="mb-4">
              <label className="block font-bold mb-2">To Account</label>
              <input
                name="address"
                className="w-full p-2 border border-black rounded focus:outline-none focus:border-yellow-300 text-black"
                value={inputValue.address}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block font-bold mb-2">Amount</label>
            <input
              name="amount"
              className="w-full p-2 border border-black rounded focus:outline-none focus:border-yellow-300 text-black"
              value={inputValue.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                if (transactionType === 'mint') handleTokenMinting(event);
                else if (transactionType === 'burn') handleBurningToken(event);
                else if (transactionType === 'transfer') handleTransferingToken(event);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {transactionType === 'mint' ? 'Mint' : transactionType === 'burn' ? 'Burn' : 'Transfer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// export default BankingForm;

export default AccountForm;
