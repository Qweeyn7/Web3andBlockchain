const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/58dc7fe169284cd19ac9737946f1808b')

const web3 = new Web3(provider)

web3.eth.getBalance('0x00000000219ab540356cBB839Cbe05303d7705Fa').then(balance =>
console.log(balance)
)