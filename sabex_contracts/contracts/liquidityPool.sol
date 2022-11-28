// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

import "./tokenCreate.sol";

 contract testing is tokenCreate{

constructor () tokenCreate() {} 

//  function getMyBalance() public view returns(uint){
//      return balanceOf(msg.sender);
//  }

    uint256  public WBTCReserve;
    uint256 public borrowedWBTC;
    mapping (address=>uint256) public userLiquidity;
    mapping(address=>mapping(address=>uint256)) userXtoken;
    mapping (address=>uint256) public borrow;

    //function to deposit WBTC in reserve
    function provideLiquidity(address _provider,uint256 _WBTCAmount) external payable returns(bool){
        
        uint256 previousReserve =WBTCReserve;
        WBTCReserve+=_WBTCAmount;
        userLiquidity[_provider]=_WBTCAmount;
        if(previousReserve>=WBTCReserve)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    //function to borrowWBTC amount against collateral (WETH etc.)
    function borrowWBTC(address _borrower,uint256 _WBTCAmount) external payable returns(uint256){
        require(WBTCReserve>_WBTCAmount,"Pool does not have sufficient fund!");
        borrow[_borrower]=_WBTCAmount;
        WBTCReserve-=_WBTCAmount;
        borrowedWBTC+=_WBTCAmount;
        return _WBTCAmount;
    }

    function amountDeposited() view external returns(uint256)
    {
        return WBTCReserve+borrowedWBTC;
    }
    function amountBorrowed() view external returns(uint256)
    {
        return borrowedWBTC;
    }

     
}