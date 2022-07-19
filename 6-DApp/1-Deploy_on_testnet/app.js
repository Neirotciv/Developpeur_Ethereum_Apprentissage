require('dotenv').config();
const Web3 = require('web3');
const rpcURL = `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`;
const web3 = new Web3(rpcURL);
const Tx = require('ethereumjs-tx').Transaction;
const ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
];
const deployedSCAddress = "0xaE4b7803eEd6752614305Ba0633af92Ad2B8AD2E";
const account = "0x7aaEd0BF529a4E928C14c1B0Ba24bB71E0E7E641";
const contract = new web3.eth.Contract(ABI, deployedSCAddress);
const privateKey = Buffer.from(process.env.PRIVATE_KEY, "hex");

// web3.eth.getTransactionCount(account, (err, txCount) => {
//     const data = contract.methods.set(69).encodeABI();
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         gasLimit: web3.utils.toHex(10000000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
//         to: deployedSCAddress,
//         data: data
//     }
    
//     // Sign the transaction
//     const tx = new Tx(txObject, { "chain": "ropsten" });
//     tx.sign(privateKey);

//     const serializedTx = tx.serialize()
// 	const raw = '0x' + serializedTx.toString('hex')
 
// 	web3.eth.sendSignedTransaction(raw, (err, txHash) => {
// 		console.log('txHash:', txHash, 'err:', err)
// 		//Use this txHash to find the contract on Etherscan!
// 	})
// });

contract.methods.get().call((error, result) => {
    console.log(result);
    console.log(result.to);
    console.log(result.from);
});