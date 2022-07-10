import Web3 from "web3";

const getWeb3 = () => {
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                console.log("it's ok");
            } else {
                console.log("it's not ok");
            }
        });
    });
}

export default getWeb3;