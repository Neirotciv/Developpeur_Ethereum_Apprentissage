// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Chainlink {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Rinkeby
     * Aggregator: EUR/USD
     * Address: 0xDC4BDB458C6361093069Ca2aD30D74cc152EdC75
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x0c15Ab9A0DB086e062194c273CC79f41597Bbf13);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }
}
