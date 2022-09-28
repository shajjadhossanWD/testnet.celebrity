import mint from "./MintNFT.json";
import token from "./BEP20.json";
import dsltestnet from "./DSLTestnet.json";
import dslmainnet from "./DSLMainnet.json";
import usdsc from "./USDSC.json";
import S39 from "./S39.json";
import Quest from "./Quest.json";
export const mintAddressTestnet = "0x10Bbb1c23dd6334503B893CDF0ae8e784b2346A3";
export const mintABITestnet = mint.abi;

// export const private_key = "6fceaa9bd7f352b9258617e7710d7112fa28b73b19d0cdb45320a187c7d076de";

export const RPC = "https://data-seed-prebsc-1-s1.binance.org:8545";

export const chainId = "97";

export const USDSCtokenAddressTestnet =
  "0x8d671b650248B4BfaF411CB36Cc1C8bD8429F2A3";
export const USDSCtokenABITestnet = token.abi;

export const DSLtokenAddressTestnet =
  " 0x203507762cF4B63bFEF530a87497c7F5FDad7b0B";
export const DSLtokenABITestnet = dsltestnet.abi;

export const USDSCtokenAddressMainnet =
  "0x13b852e276f10281C72ccF33EdF81d81DD198Aae";
export const USDSCtokenABIMainnet = usdsc.abi;

export const DSLtokenAddressMainnet =
  "0x4A1530Fb85BdB9250Db2bE251584874179eB8Dc5";
export const DSLtokenABIMainnet = dslmainnet.abi;

export const S39tokenAddressTestnet =
  "0x80aAeA2450F81a67fcEB2dEDABCbC57ebF346Ee7";
export const S39tokenABITestnet = S39.abi;

export const QuesttokenAddressTestnet =
  " 0x5C6e946b94b2c79563b1fB2B73bD60bB7bd0Cf5B";
export const QuesttokenABITestnet = Quest.abi;
