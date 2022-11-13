/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface HifiPoolRegistryInterface extends utils.Interface {
  functions: {
    "_renounceOwnership()": FunctionFragment;
    "_transferOwnership(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pools(address)": FunctionFragment;
    "trackPool(address)": FunctionFragment;
    "untrackPool(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_renounceOwnership"
      | "_transferOwnership"
      | "owner"
      | "pools"
      | "trackPool"
      | "untrackPool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pools", values: [string]): string;
  encodeFunctionData(functionFragment: "trackPool", values: [string]): string;
  encodeFunctionData(functionFragment: "untrackPool", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "_renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "trackPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "untrackPool",
    data: BytesLike
  ): Result;

  events: {
    "TrackPool(address)": EventFragment;
    "TransferOwnership(address,address)": EventFragment;
    "UntrackPool(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TrackPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferOwnership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UntrackPool"): EventFragment;
}

export interface TrackPoolEventObject {
  pool: string;
}
export type TrackPoolEvent = TypedEvent<[string], TrackPoolEventObject>;

export type TrackPoolEventFilter = TypedEventFilter<TrackPoolEvent>;

export interface TransferOwnershipEventObject {
  oldOwner: string;
  newOwner: string;
}
export type TransferOwnershipEvent = TypedEvent<
  [string, string],
  TransferOwnershipEventObject
>;

export type TransferOwnershipEventFilter =
  TypedEventFilter<TransferOwnershipEvent>;

export interface UntrackPoolEventObject {
  pool: string;
}
export type UntrackPoolEvent = TypedEvent<[string], UntrackPoolEventObject>;

export type UntrackPoolEventFilter = TypedEventFilter<UntrackPoolEvent>;

export interface HifiPoolRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HifiPoolRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pools(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    trackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    untrackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pools(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  trackPool(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  untrackPool(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _renounceOwnership(overrides?: CallOverrides): Promise<void>;

    _transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pools(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    trackPool(pool: string, overrides?: CallOverrides): Promise<void>;

    untrackPool(pool: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "TrackPool(address)"(pool?: string | null): TrackPoolEventFilter;
    TrackPool(pool?: string | null): TrackPoolEventFilter;

    "TransferOwnership(address,address)"(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TransferOwnershipEventFilter;
    TransferOwnership(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TransferOwnershipEventFilter;

    "UntrackPool(address)"(pool?: string | null): UntrackPoolEventFilter;
    UntrackPool(pool?: string | null): UntrackPoolEventFilter;
  };

  estimateGas: {
    _renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pools(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    trackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    untrackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    trackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    untrackPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}