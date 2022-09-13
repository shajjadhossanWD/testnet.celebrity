import mint from "./MintNFT.json";
// import token from "./BEP20.json";
// import dsltestnet from "./DSLTestnet.json";
import dslmainnet from "./DSLMainnet.json";
import usdsc from "./USDSC.json";
// import S39 from "./S39.json";
// import Quest from "./Quest.json";

export const mintAddressTestnet = "0xA7F60Eae5a0B97f2209BC2ef3430C34B341C8527";  //celebritymainnetaddress
export const mintABITestnet = mint.abi;

export const private_key = "4284f6eae0ebc914437b42cd3a523a67c70428dd1888c6ae6059f26c74c452cc";

export const RPC = "https://bsc-dataseed.binance.org/";

export const chainId = "56";

// export const USDSCtokenAddressTestnet =
//   "0x474DeB3F462A5A86B885AadB4Ed22D5bBA93eAbb";
// export const USDSCtokenABITestnet = token.abi;

// export const DSLtokenAddressTestnet =
//   "0xb1eCd4C8C6EEF40EF4EB6a066821C7b3227083d5";
// export const DSLtokenABITestnet = dsltestnet.abi;

export const USDSCtokenAddressMainnet =
  "0x13b852e276f10281C72ccF33EdF81d81DD198Aae";
export const USDSCtokenABIMainnet = usdsc.abi;

export const DSLtokenAddressMainnet =
  "0x4A1530Fb85BdB9250Db2bE251584874179eB8Dc5";
export const DSLtokenABIMainnet = dslmainnet.abi;

// export const S39tokenAddressTestnet =
//   "0x98a094ae9CB1f770cA0f800588B09e4729f2CDaD";
// export const S39tokenABITestnet = S39.abi;

// export const QuesttokenAddressTestnet =
//   "0x01461B5EB656Bb3735Ea3bBED3760628Ad507D02";
// export const QuesttokenABITestnet = Quest.abi;
