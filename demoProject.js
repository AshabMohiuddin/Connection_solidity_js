let Web3 =require("web3");

let ABI = require("./abi.json");
let contractAddress = "0xBf91AD28e97523Cc73643473e7c9acC26A91b6Eb";

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));


//web3.eth.getBalance("paste the address of the account inside it").then(console.log);


let contract = new web3.eth.Contract(ABI,contractAddress);
/*
let result;    
const blockNumber = async () => {
        result = await contract.methods.saveUser("c@g.com", "1234").call({from: "0x9A442E483e9da2b4FADd016cf3209987112C2E64"});
        
        console.log(result);
        await contract.methods.membership("c@g.com").call().then(console.log);
};
console.log(blockNumber());
*/

let send = async() => {
    await contract.methods.membership("e@g.com").call().then(console.log);
    const obj = await web3.eth.accounts.create();
    console.log(obj.address, obj.privateKey);
    web3.eth.getBalance(obj.address).then(console.log);
    const accounts = await web3.eth.getAccounts();
    //const _from = accounts[1];
    const _from = "0x64Dc11443C19034DeAEA807B7580611B323a8DD7";

    //const privateKey = "0x29ce4e4b946243fd48c29d32b0482757603d08cac75a9ee90c2c621684c772ff";
    const privateKey = "0xfda96dc6fc9d43b33ffb3e56c5b6f4502e087d81ff3c8f6386c35b348ab6b663";
    const tx = {
        from: _from,
        to : contractAddress,
        gas: 400000,
        data: contract.methods.saveUser("a@g.com", "123").encodeABI()

    }
    const signature = await web3.eth.accounts.signTransaction(tx, privateKey)
    web3.eth.sendSignedTransaction(signature.rawTransaction).on(
        "receipt",async()=>{
           // const events = await contract.getPastEvents("Incremented", {fromBlock: 1, toBlock:"latest"})
           // console.log(events);
        }
    )
    console.log(signature);

    contract.methods.membership("m@g.com").call(console.log);

    

}
send();


