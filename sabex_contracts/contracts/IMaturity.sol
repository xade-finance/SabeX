// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;
contract ImaturityInterface{
       uint public lastUpdated;
       uint deployDate;

    constructor(){
    deployDate = block.timestamp;
    }
    // Set `lastUpdated` to `now`
    function updateTimestamp() public {
    lastUpdated = block.timestamp;
    }

    
     // Will return `true` if 10 minutes have passed since `the contract was deployed
    function tenMinutesHavePassed() public view returns (bool) {
    return (block.timestamp >= (deployDate + 10 seconds));
    }
}