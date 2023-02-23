import type {
  BaseContract,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface GnosisUntitledInterface extends utils.Interface {
  functions: {
    "confirmTransaction(uint256)": FunctionFragment;
    "executeTransaction(uint256)": FunctionFragment;
    "getTransaction(uint256)": FunctionFragment;
    "getTransactionCount()": FunctionFragment;
    "isConfirmed(uint256,address)": FunctionFragment;
    "isSigner(address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "quorum()": FunctionFragment;
    "revokeConfirmation(uint256)": FunctionFragment;
    "signerCount()": FunctionFragment;
    "submitChangeQuorum(uint256)": FunctionFragment;
    "submitNewSigner(address)": FunctionFragment;
    "submitRemoveSigner(address)": FunctionFragment;
    "submitSendBytecode(address,uint256,bytes)": FunctionFragment;
    "submitValueTransfer(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "confirmTransaction"
      | "executeTransaction"
      | "getTransaction"
      | "getTransactionCount"
      | "isConfirmed"
      | "isSigner"
      | "nonce"
      | "quorum"
      | "revokeConfirmation"
      | "signerCount"
      | "submitChangeQuorum"
      | "submitNewSigner"
      | "submitRemoveSigner"
      | "submitSendBytecode"
      | "submitValueTransfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [PromiseOrValue<BigInt>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [PromiseOrValue<BigInt>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransaction",
    values: [PromiseOrValue<BigInt>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [PromiseOrValue<BigInt>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmation",
    values: [PromiseOrValue<BigInt>]
  ): string;
  encodeFunctionData(
    functionFragment: "signerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitChangeQuorum",
    values: [PromiseOrValue<BigInt>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitNewSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRemoveSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitSendBytecode",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigInt>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitValueTransfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigInt>]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitChangeQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitNewSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRemoveSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitSendBytecode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitValueTransfer",
    data: BytesLike
  ): Result;

  events: {
    "ConfirmTransaction(address,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "ExecuteTransaction(address,uint256)": EventFragment;
    "RevokeConfirmation(address,uint256)": EventFragment;
    "SubmitTransaction(address,uint256,address,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfirmTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeConfirmation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmitTransaction"): EventFragment;
}

export interface ConfirmTransactionEventObject {
  sender: string;
  txIndex: BigInt;
}
export type ConfirmTransactionEvent = TypedEvent<
  [string, BigInt],
  ConfirmTransactionEventObject
>;

export type ConfirmTransactionEventFilter =
  TypedEventFilter<ConfirmTransactionEvent>;

export interface DepositEventObject {
  sender: string;
  amount: BigInt;
  balance: BigInt;
}
export type DepositEvent = TypedEvent<
  [string, BigInt, BigInt],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface ExecuteTransactionEventObject {
  sender: string;
  txIndex: BigInt;
}
export type ExecuteTransactionEvent = TypedEvent<
  [string, BigInt],
  ExecuteTransactionEventObject
>;

export type ExecuteTransactionEventFilter =
  TypedEventFilter<ExecuteTransactionEvent>;

export interface RevokeConfirmationEventObject {
  sender: string;
  txIndex: BigInt;
}
export type RevokeConfirmationEvent = TypedEvent<
  [string, BigInt],
  RevokeConfirmationEventObject
>;

export type RevokeConfirmationEventFilter =
  TypedEventFilter<RevokeConfirmationEvent>;

export interface SubmitTransactionEventObject {
  sender: string;
  txIndex: BigInt;
  to: string;
  value: BigInt;
  txType: number;
}
export type SubmitTransactionEvent = TypedEvent<
  [string, BigInt, string, BigInt, number],
  SubmitTransactionEventObject
>;

export type SubmitTransactionEventFilter =
  TypedEventFilter<SubmitTransactionEvent>;

export interface GnosisUntitled extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GnosisUntitledInterface;

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
    confirmTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigInt, string, boolean, BigInt, number, BigInt] & {
        to: string;
        value: BigInt;
        data: string;
        executed: boolean;
        numConfirmations: BigInt;
        txType: number;
        date: BigInt;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<[BigInt]>;

    isConfirmed(
      arg0: PromiseOrValue<BigInt>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nonce(overrides?: CallOverrides): Promise<[BigInt]>;

    quorum(overrides?: CallOverrides): Promise<[BigInt]>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signerCount(overrides?: CallOverrides): Promise<[BigInt]>;

    submitChangeQuorum(
      _quorum: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitRemoveSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  confirmTransaction(
    _txIndex: PromiseOrValue<BigInt>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    _txIndex: PromiseOrValue<BigInt>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTransaction(
    _txIndex: PromiseOrValue<BigInt>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigInt, string, boolean, BigInt, number, BigInt] & {
      to: string;
      value: BigInt;
      data: string;
      executed: boolean;
      numConfirmations: BigInt;
      txType: number;
      date: BigInt;
    }
  >;

  getTransactionCount(overrides?: CallOverrides): Promise<BigInt>;

  isConfirmed(
    arg0: PromiseOrValue<BigInt>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSigner(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nonce(overrides?: CallOverrides): Promise<BigInt>;

  quorum(overrides?: CallOverrides): Promise<BigInt>;

  revokeConfirmation(
    _txIndex: PromiseOrValue<BigInt>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signerCount(overrides?: CallOverrides): Promise<BigInt>;

  submitChangeQuorum(
    _quorum: PromiseOrValue<BigInt>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitNewSigner(
    _newSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitRemoveSigner(
    _newSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitSendBytecode(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigInt>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitValueTransfer(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigInt>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<void>;

    getTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigInt, string, boolean, BigInt, number, BigInt] & {
        to: string;
        value: BigInt;
        data: string;
        executed: boolean;
        numConfirmations: BigInt;
        txType: number;
        date: BigInt;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<BigInt>;

    isConfirmed(
      arg0: PromiseOrValue<BigInt>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonce(overrides?: CallOverrides): Promise<BigInt>;

    quorum(overrides?: CallOverrides): Promise<BigInt>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<void>;

    signerCount(overrides?: CallOverrides): Promise<BigInt>;

    submitChangeQuorum(
      _quorum: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitRemoveSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConfirmTransaction(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): ConfirmTransactionEventFilter;
    ConfirmTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): ConfirmTransactionEventFilter;

    "Deposit(address,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;
    Deposit(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;

    "ExecuteTransaction(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): ExecuteTransactionEventFilter;
    ExecuteTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): ExecuteTransactionEventFilter;

    "RevokeConfirmation(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): RevokeConfirmationEventFilter;
    RevokeConfirmation(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null
    ): RevokeConfirmationEventFilter;

    "SubmitTransaction(address,uint256,address,uint256,uint8)"(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      txType?: null
    ): SubmitTransactionEventFilter;
    SubmitTransaction(
      sender?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigInt> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      txType?: null
    ): SubmitTransactionEventFilter;
  };

  estimateGas: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    getTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<BigInt>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigInt>;

    isConfirmed(
      arg0: PromiseOrValue<BigInt>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigInt>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigInt>;

    nonce(overrides?: CallOverrides): Promise<BigInt>;

    quorum(overrides?: CallOverrides): Promise<BigInt>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    signerCount(overrides?: CallOverrides): Promise<BigInt>;

    submitChangeQuorum(
      _quorum: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    submitRemoveSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigInt>;
  };

  populateTransaction: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: PromiseOrValue<BigInt>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submitChangeQuorum(
      _quorum: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitNewSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitRemoveSigner(
      _newSigner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitSendBytecode(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitValueTransfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigInt>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
