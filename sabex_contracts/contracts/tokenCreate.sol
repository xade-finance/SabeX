// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract tokenCreate is ERC20{

  constructor () ERC20("Xade", "XD"){
      _mint(msg.sender, 10* (10**18));
  }

}