/*
const web3 = new Web3("https://kovan.infura.io/v3/<infura_project_id>");
const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
priceFeed.methods.latestRoundData().call()
    .then((roundData) => {
        // Do something with roundData
        console.log("Latest Round Data", roundData)
    });
*/
const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const priceFeedABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getLatestPrice",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
const addr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
// const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
// kovan address for PriceConsumerV3

const priceFeed = new web3.eth.Contract(priceFeedABI, addr);
priceFeed.methods.getLatestPrice().call()
  .then((price) => {
    // Do something with roundData
    console.log("Latest Price ", price)
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

