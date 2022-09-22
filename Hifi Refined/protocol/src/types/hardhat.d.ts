/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Erc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20__factory>;
    getContractFactory(
      name: "Erc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Permit__factory>;
    getContractFactory(
      name: "Erc20Recover",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Recover__factory>;
    getContractFactory(
      name: "IErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20__factory>;
    getContractFactory(
      name: "IErc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20Permit__factory>;
    getContractFactory(
      name: "IErc20Recover",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20Recover__factory>;
    getContractFactory(
      name: "IOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnableUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "BalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceSheetV2__factory>;
    getContractFactory(
      name: "IBalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalanceSheetV2__factory>;
    getContractFactory(
      name: "SBalanceSheetV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBalanceSheetV1__factory>;
    getContractFactory(
      name: "SBalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBalanceSheetV2__factory>;
    getContractFactory(
      name: "Fintroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fintroller__factory>;
    getContractFactory(
      name: "IFintroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFintroller__factory>;
    getContractFactory(
      name: "HToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HToken__factory>;
    getContractFactory(
      name: "IHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHToken__factory>;
    getContractFactory(
      name: "IAggregatorV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregatorV3__factory>;
    getContractFactory(
      name: "ChainlinkOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkOperator__factory>;
    getContractFactory(
      name: "IChainlinkOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainlinkOperator__factory>;
    getContractFactory(
      name: "SimplePriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimplePriceFeed__factory>;
    getContractFactory(
      name: "StablecoinPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StablecoinPriceFeed__factory>;
    getContractFactory(
      name: "BalanceSheetUpgraded",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceSheetUpgraded__factory>;
    getContractFactory(
      name: "IBalanceSheetUpgraded",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalanceSheetUpgraded__factory>;
    getContractFactory(
      name: "SBalanceSheetUpgraded",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBalanceSheetUpgraded__factory>;
    getContractFactory(
      name: "GodModeBalanceSheet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeBalanceSheet__factory>;
    getContractFactory(
      name: "GodModeErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeErc20__factory>;
    getContractFactory(
      name: "GodModeHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeHToken__factory>;
    getContractFactory(
      name: "GodModeOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeOwnableUpgradeable__factory>;

    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Erc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20>;
    getContractAt(
      name: "Erc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Permit>;
    getContractAt(
      name: "Erc20Recover",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Recover>;
    getContractAt(
      name: "IErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20>;
    getContractAt(
      name: "IErc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20Permit>;
    getContractAt(
      name: "IErc20Recover",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20Recover>;
    getContractAt(
      name: "IOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnableUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "BalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceSheetV2>;
    getContractAt(
      name: "IBalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalanceSheetV2>;
    getContractAt(
      name: "SBalanceSheetV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBalanceSheetV1>;
    getContractAt(
      name: "SBalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBalanceSheetV2>;
    getContractAt(
      name: "Fintroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Fintroller>;
    getContractAt(
      name: "IFintroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFintroller>;
    getContractAt(
      name: "HToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HToken>;
    getContractAt(
      name: "IHToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHToken>;
    getContractAt(
      name: "IAggregatorV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregatorV3>;
    getContractAt(
      name: "ChainlinkOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkOperator>;
    getContractAt(
      name: "IChainlinkOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainlinkOperator>;
    getContractAt(
      name: "SimplePriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimplePriceFeed>;
    getContractAt(
      name: "StablecoinPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StablecoinPriceFeed>;
    getContractAt(
      name: "BalanceSheetUpgraded",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceSheetUpgraded>;
    getContractAt(
      name: "IBalanceSheetUpgraded",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalanceSheetUpgraded>;
    getContractAt(
      name: "SBalanceSheetUpgraded",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBalanceSheetUpgraded>;
    getContractAt(
      name: "GodModeBalanceSheet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeBalanceSheet>;
    getContractAt(
      name: "GodModeErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeErc20>;
    getContractAt(
      name: "GodModeHToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeHToken>;
    getContractAt(
      name: "GodModeOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeOwnableUpgradeable>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
