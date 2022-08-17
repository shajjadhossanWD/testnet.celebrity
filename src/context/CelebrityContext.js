import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import swal from "sweetalert";
import {
  DSLtokenABITestnet, DSLtokenAddressTestnet, 
  mintABITestnet,mintAddressTestnet, 
  USDSCtokenABITestnet, USDSCtokenAddressTestnet,
  USDSCtokenAddressMainnet, USDSCtokenABIMainnet,
  DSLtokenAddressMainnet, DSLtokenABIMainnet
} from "../utils/constant";
export const CelebrityContext = createContext();

const { ethereum } = window;

const getMintContractTestnet = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const MintNFTContract = new ethers.Contract(
    mintAddressTestnet,
    mintABITestnet,
    signer
  );

  return MintNFTContract;
};

const getUSDSCtokenContractTestnet = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(
    USDSCtokenAddressTestnet,
    USDSCtokenABITestnet,
    signer
  );

  return tokenContract;
};

const getDSLtokenContractTestnet = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(
    DSLtokenAddressTestnet,
    DSLtokenABITestnet,
    signer
  );

  return tokenContract;
};

const getUSDSCtokenContractMainnet = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(USDSCtokenAddressMainnet, USDSCtokenABIMainnet, signer);

  return tokenContract;
}

const getDSLtokenContractMainnet = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(DSLtokenAddressMainnet, DSLtokenABIMainnet, signer);

  return tokenContract;
}

export default function CelebrityProvider({ children }) {
  const [loginModal, setLoginModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [chain, setChain] = useState(null);
  const [walletModal, setWalletModal] = useState(false);
  const [metamaskBalance, setMetamaskBalance] = useState({});
  const [metamaskBalanceLoading, setMetamaskBalanceLoading] = useState(false);

  const openWalletModal = () => {
    (!user?.walletAddress || user?.walletAddress === "undefined") && setWalletModal(true)
  };
  const closeWalletModal = () => setWalletModal(false);

  const openLoginModal = () => setLoginModal(true);
  const closeLoginModal = () => setLoginModal(false);

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  const getBalanceTestnet = async () => {
    const USDSCtokenContract = getUSDSCtokenContractTestnet();
    const DSLtokenContract = getDSLtokenContractTestnet();
    const USDSCbalance = await USDSCtokenContract.balanceOf(currentAccount);
    const USDSCamount = ethers.utils.formatEther(USDSCbalance);
    const DSLbalance = await DSLtokenContract.balanceOf(currentAccount);
    const DSLamount = ethers.utils.formatEther(DSLbalance);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const balance1 = await provider.getBalance(currentAccount)
    console.log("usdsc: " + USDSCamount);
    console.log("dsl: " + DSLamount);
    console.log("BNB Testnet: " + ethers.utils.formatEther(balance1));
    const wallet = {
      usdsc: USDSCamount,
      bnb: ethers.utils.formatEther(balance1),
      dsl: DSLamount
    }
    return setMetamaskBalance(wallet);
  }

  const getBalanceMainnet = async () => {
    const USDSCtokenContract = getUSDSCtokenContractMainnet();
    const DSLtokenContract = getDSLtokenContractMainnet();
    const USDSCbalance = await USDSCtokenContract.balanceOf(currentAccount);
    const USDSCamount = ethers.utils.formatEther(USDSCbalance);
    const DSLbalance = await DSLtokenContract.balanceOf(currentAccount);
    const DSLamount = ethers.utils.formatEther(DSLbalance);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const balance1 = await provider.getBalance(currentAccount)
    console.log("usdsc: " + USDSCamount);
    console.log("dsl: " + DSLamount);
    console.log("BNB Testnet: " + ethers.utils.formatEther(balance1));
    const metamask = {
      usdsc: USDSCamount,
      bnb: ethers.utils.formatEther(balance1),
      dsl: DSLamount
    }
    return setMetamaskBalance(metamask);
  }

  const mintTicketNFTTestnetBNB = async (uriNft, mintPrice) => {
    try {
      if (ethereum) {
        const chainid = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log("This is Chain ID: ", chainid);
        if (chainid === "0x38" || chainid === "0x61") {
          const MintNFTContract = getMintContractTestnet();
          console.log(MintNFTContract);
          const provider = new ethers.providers.Web3Provider(ethereum);
          // const conversion = await axios.get("https://free.currconv.com/api/v7/convert?q=USD_SGD&compact=ultra&apiKey=e5b6419c6d8fc5692df5");
          // const USD = 3000/conversion.data.USD_SGD;
          const USD = mintPrice / 1.4;
          console.log(USD);
          const price1 = await axios.get(
            "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
          );
          console.log(price1.data.data.price);
          const price = (
            parseFloat(USD) / parseFloat(price1.data.data.price)
          ).toString();
          console.log(price);
          console.log(typeof price);
          const parsedAmount = ethers.utils.parseEther(price);
          const admin = "0xd7b3De408C49DC693aA44193fB44240F1bFe1772";
          const payment = await MintNFTContract.charge(admin, {
            value: parsedAmount._hex,
          });
          let payment_test = await provider.getTransaction(payment.hash);
          while (payment_test.blockNumber === null) {
            console.log("Payment In Progress...");
            payment_test = await provider.getTransaction(payment.hash);
          }
          console.log(payment_test.blockNumber);
          let payment_hash = "https://testnet.bscscan.com/tx/" + payment.hash;
          console.log("Payment link: " + payment_hash);
          const recipient = currentAccount;
          const Val = await MintNFTContract.mint(uriNft, recipient);
          let txn_test = await provider.getTransaction(Val.hash);
          if (txn_test) {
            while (txn_test.blockNumber === null) {
              console.log("Minting...");
              txn_test = await provider.getTransaction(Val.hash);
            }
            console.log("txn_test.blockNumber: " + txn_test.blockNumber);
          }
          const ID = await MintNFTContract.totalSupply();
          console.log(ID.toString());
          let mint_hash = "https://testnet.bscscan.com/tx/" + Val.hash;
          console.log("Mint link: " + mint_hash);
          return mint_hash;
        } else {
          console.log("No ethereum object");
          //setRequestLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      //setRequestLoading(false);
      if (error.code === -32603) {
        swal({
          title: "Attention",
          text: "Insufficient funds for minting!",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      } else {
        swal({
          title: "Attention",
          text: "Minting Failed",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      }
      throw new Error("No ethereum object");
    }
  };

  const mintTicketNFTTestnetUSDSC = async (uriNft, mintPrice) => {
    try {
      if (ethereum) {
        const chainid = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log("This is Chain ID: ", chainid);
        if (chainid === "0x38" || chainid === "0x61") {
          const MintNFTContract = getMintContractTestnet();
          console.log(MintNFTContract);
          const USDSCTokenContract = getUSDSCtokenContractTestnet();
          console.log(USDSCTokenContract);
          const provider = new ethers.providers.Web3Provider(ethereum);
          // const conversion = await axios.get("https://free.currconv.com/api/v7/convert?q=USD_SGD&compact=ultra&apiKey=e5b6419c6d8fc5692df5");
          const USD = (mintPrice / 1.4).toString();
          // const USD = 300/conversion.data.USD_SGD;
          console.log(USD);
          const parsedAmount = ethers.utils.parseEther(USD);
          const admin = "0xd7b3De408C49DC693aA44193fB44240F1bFe1772";
          const gasLimit = await USDSCTokenContract.estimateGas.transfer(
            admin,
            parsedAmount._hex
          );
          const gasPrice = await await provider.getGasPrice();
          const payment = await USDSCTokenContract.transfer(
            admin,
            parsedAmount._hex,
            { gasLimit: gasLimit, gasPrice: gasPrice }
          );
          let payment_test = await provider.getTransaction(payment.hash);
          while (payment_test.blockNumber === null) {
            console.log("Payment In Progress...");
            payment_test = await provider.getTransaction(payment.hash);
          }
          console.log(payment_test.blockNumber);
          let payment_hash = "https://testnet.bscscan.com/tx/" + payment.hash;
          console.log("Payment link: " + payment_hash);
          const recipient = currentAccount;
          const Val = await MintNFTContract.mint(uriNft, recipient);
          let txn_test = await provider.getTransaction(Val.hash);
          if (txn_test) {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<p></p><div class="loader"></div> <p class="success"><b>Transaction Pending...<b></p> `;
            swal({
              content: wrapper,
              button: false,
              className: "modal_class_success",
            });
            while (txn_test.blockNumber === null) {
              console.log("Minting...");
              txn_test = await provider.getTransaction(Val.hash);
            }
            console.log("txn_test.blockNumber: " + txn_test.blockNumber);
          }
          const ID = await MintNFTContract.totalSupply();
          console.log(ID.toString());
          let mint_hash = "https://testnet.bscscan.com/tx/" + Val.hash;
          console.log("Mint link: " + mint_hash);
          return mint_hash;
        } else {
          console.log("No ethereum object");
          //setRequestLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      //setRequestLoading(false);
      if (error.code === -32603) {
        swal({
          title: "Attention",
          text: "Insufficient funds for minting!",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      } else {
        swal({
          title: "Attention",
          text: "Minting Failed",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      }
      throw new Error("No ethereum object");
    }
  };

  const mintTicketNFTTestnetDSL = async (uriNft, mintPrice) => {
    try {
      if (ethereum) {
        const chainid = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log("This is Chain ID: ", chainid);
        if (chainid === "0x38" || chainid === "0x61") {
          const MintNFTContract = getMintContractTestnet();
          console.log(MintNFTContract);
          const USDSCTokenContract = getDSLtokenContractTestnet();
          console.log(USDSCTokenContract);
          const provider = new ethers.providers.Web3Provider(ethereum);
          // const conversion = await axios.get("https://free.currconv.com/api/v7/convert?q=USD_SGD&compact=ultra&apiKey=e5b6419c6d8fc5692df5");
          const USD = (mintPrice / 1.4).toString();
          // const USD = 300/conversion.data.USD_SGD;
          console.log(USD);
          const parsedAmount = ethers.utils.parseEther(USD);
          const admin = "0xd7b3De408C49DC693aA44193fB44240F1bFe1772";
          const gasLimit = await USDSCTokenContract.estimateGas.transfer(
            admin,
            parsedAmount._hex
          );
          const gasPrice = await await provider.getGasPrice();
          const payment = await USDSCTokenContract.transfer(
            admin,
            parsedAmount._hex,
            { gasLimit: gasLimit, gasPrice: gasPrice }
          );
          let payment_test = await provider.getTransaction(payment.hash);
          while (payment_test.blockNumber === null) {
            console.log("Payment In Progress...");
            payment_test = await provider.getTransaction(payment.hash);
          }
          console.log(payment_test.blockNumber);
          let payment_hash = "https://testnet.bscscan.com/tx/" + payment.hash;
          console.log("Payment link: " + payment_hash);
          const recipient = currentAccount;
          const Val = await MintNFTContract.mint(uriNft, recipient);
          let txn_test = await provider.getTransaction(Val.hash);
          if (txn_test) {
            while (txn_test.blockNumber === null) {
              console.log("Minting...");
              txn_test = await provider.getTransaction(Val.hash);
            }
            console.log("txn_test.blockNumber: " + txn_test.blockNumber);
          }
          const ID = await MintNFTContract.totalSupply();
          console.log(ID.toString());
          let mint_hash = "https://testnet.bscscan.com/tx/" + Val.hash;
          console.log("Mint link: " + mint_hash);
          return mint_hash;
        } else {
          console.log("No ethereum object");
          //setRequestLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      //setRequestLoading(false);
      if (error.code === -32603) {
        swal({
          title: "Attention",
          text: "Insufficient funds for minting!",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      } else {
        swal({
          title: "Attention",
          text: "Minting Failed",
          icon: "warning",
          button: "OK",
          // dangerMode: true,
          className: "modal_class_success",
        });
      }
      throw new Error("No ethereum object");
    }
  };

  // useEffect(() => {
  //     if (currentAccount && localStorage.getItem("token")) {
  //         setLoading(true);
  //         axios.get(`https://backend.grighund.net/api/users/${currentAccount}`, {
  //             headers: {
  //                 "authorization": `Bearer ${localStorage.getItem("token")}`
  //             }
  //         })
  //             .then(res => {
  //                 setUser(res.data);
  //             })
  //             .catch(err => {
  //                 console.log(err);
  //             })
  //             .finally(() => {
  //                 setLoading(false);
  //             });
  //     }
  // }, [currentAccount]);

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) {
        return console.log("please use metamask");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        const chainid = await window.ethereum.request({
          method: "eth_chainId",
        });
        setChain(chainid);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async (wallet) => {
    try {
      console.log("connect");
      if (window.innerWidth < 576 && !ethereum) {
        return swal({
          title: "Attention",
          text: "Please use Metamask browser!",
          icon: "warning",
          button: "OK",
          dangerMode: true,
          className: "modal_class",
        });
      }
      if (!ethereum) {
        return console.log("please use metamask");
      }
      if (wallet === "Metamask") {
        setLoading(true);

        const chainid = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log("This is Chain ID: ", chainid);
        setChain(chainid);
        if (chainid === "0x38" || chainid === "0x61") {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setCurrentAccount(accounts[0]);

          await axios
            .post(`https://backend.celebrity.sg/api/v1/user/`, {
              walletAddress: accounts[0],
            })
            .then((res) => {
              if (res.data.user) {
                // getBalanceTestnet();
                setUser(res.data.user);
                setLoading(false);
                closeWalletModal();
                localStorage.setItem("token", res.data.token);
                const wrapper = document.createElement("div");
                wrapper.innerHTML = `<p class='text-break text-white fs-6'>You have succesfully logged in with <br/>Binance Chain.</p>`;
                return swal({
                  title: "Success",
                  // text: "You have succesfully logged in with Binance Chain.",
                  content: wrapper,
                  icon: "success",
                  button: "OK",
                  // dangerMode: true,
                  className: "modal_class_success",
                });
              }
            });
        } else {
          swal({
            title: "Attention",
            text: "Please change to Binance Chain before connecting.",
            icon: "warning",
            button: "OK",
            dangerMode: true,
            className: "modal_class",
          });
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const logOut = async () => {
    setCurrentAccount(null);
    setUser({});
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (currentAccount && localStorage.getItem("token")) {
      setLoading(true);
      axios
        .get(`https://backend.indianfilmtitles.com/api/v1/user/`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentAccount]);


  return (
    <CelebrityContext.Provider
      value={{
        loginModal,
        openLoginModal,
        closeLoginModal,
        connectWallet,
        currentAccount,
        loading,
        user,
        walletModal,
        openWalletModal,
        closeWalletModal,
        setUser,
        chain,
        logOut,
        mintTicketNFTTestnetBNB,
        mintTicketNFTTestnetUSDSC,
        mintTicketNFTTestnetDSL,
        metamaskBalance,
        metamaskBalanceLoading,
        getBalanceTestnet,
        getBalanceMainnet
      }}
    >
      {children}
    </CelebrityContext.Provider>
  );
}
