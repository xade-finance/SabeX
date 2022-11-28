// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;
interface IpoolInterface{
    function  amountDeposited() external returns(uint256);
    function  amountBorrowed() external returns(uint256);
}