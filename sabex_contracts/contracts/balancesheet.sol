// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;
import "sabex_contracts/contracts/liquidityPool.sol";
import "sabex_contracts/contracts/ILiquidityPool.sol";
import "sabex_contracts/contracts/IMaturity.sol";

contract  BalanceSheet  {
    uint256 I=8; //I is the annual CPI of the region provided by the oracles
    uint256 precision=100; //10^6
    uint256 SX=1.3*100*I; // 10^6 SX=1.3*I *Note solditiy doesnt support float hence for testing uint is used
    uint256 public savingRate;
    uint256 public variableRate;
    uint256 public ratio;
    uint256 public BY; //Borrowing Yield
    bool public maturity;
    uint256 public RR=0.02*100;//RR for borrowing is set at 0.02 initally
    address public constant poolContract=0x8431717927C4a3343bCf1626e7B5B1D31E240406;
    address public constant maturityContract=0xd9145CCE52D386f254917e481eB44e9943F39138;
    IpoolInterface plc=IpoolInterface(poolContract);
    ImaturityInterface mlc=ImaturityInterface(maturityContract);


   
     function percent(uint numerator, uint denominator, uint precisionset) public pure  returns(uint quotient) {

         // caution, check safe-to-multiply here
        uint _numerator  = numerator * 10 ** (precisionset+1);
        // with rounding of last digit
        uint _quotient =  ((_numerator / denominator) + 5) / 10;
        return ( _quotient);
    }

    //Function to calculate the utilisation(u(t)) ratio between 0 and 1 having precision 2 e.g. 10=0.1
    function utilisationRatio() public   returns(uint256  ){
        ratio=percent(plc.amountBorrowed(),plc.amountDeposited(),2);
        return ratio;
    }
    

    //Function to calculate the Svaing Interest rate for the lender
    //VR=(1-u(t)).SX% (
    //S%=SX%-VR
    function savingInterestModel () public returns(uint256 ){
        uint256 utilisationRatioAmount=utilisationRatio();
        variableRate=((1*precision)-utilisationRatioAmount)*SX;
        savingRate=((SX*precision)-variableRate);

        return savingRate;
    }

    //function to calculate the borrowing rate
    //BY=S%.D+RR.D
    //BY%=(BY.R)/B
    function borrowingInterestModel() public returns(uint256){
        uint256 R=1;
        BY=(savingRate*(plc.amountDeposited()))+(RR*(plc.amountDeposited()));
        BY=(BY*R)/(plc.amountBorrowed());
        return BY;
    }

    function checkMaturity() public {
        maturity= mlc.tenMinutesHavePassed();
    }

 
   
}