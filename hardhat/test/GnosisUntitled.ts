import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SafeCreatedEvent } from "../typechain-types/SafeFactory";
import { SubmitTransactionEvent } from "../typechain-types/GnosisUntitled";

describe("GnosisUntitled", function () {
  const deployOnlyFactory = async () => {
    const [user1, user2, user3, user4] = await ethers.getSigners();
    const SafeFactory = await ethers.getContractFactory("SafeFactory");
    const safeFactory = await SafeFactory.deploy();
    await safeFactory.deployed();

    const users = [user1, user2, user3, user4];

    return { users, safeFactory };
  };

  const deployWithSafe = async () => {
    const [user1, user2, user3, user4] = await ethers.getSigners();
    const SafeFactory = await ethers.getContractFactory("SafeFactory");
    const safeFactory = await SafeFactory.deploy();
    await safeFactory.deployed();

    let tx = await safeFactory.createSafe(
      [user1.address, user2.address, user3.address],
      2
    );
    let rc = await tx.wait();
    let event = rc.events!.find(
      (event) => event.event === "SafeCreated"
    ) as SafeCreatedEvent;

    const [safeAddress] = event.args;
    const gnosisSafe = await ethers.getContractAt(
      "GnosisUntitled",
      safeAddress
    );

    const users = [user1, user2, user3, user4];

    return { users, gnosisSafe, safeFactory };
  };

  it("check deploys safe correctly", async () => {
    const { users, safeFactory } = await loadFixture(deployOnlyFactory);
    const [user1, user2, user3] = users;

    //check deployment of Safe 1
    const tx = await safeFactory.createSafe(
      [user1.address, user2.address, user3.address],
      2
    );
    const rc = await tx.wait();
    const event = rc.events!.find(
      (event) => event.event === "SafeCreated"
    ) as SafeCreatedEvent;

    const [safeAddress, byUser] = event.args;

    expect(byUser).to.eq(user1.address);
    expect(safeAddress).to.not.eq(ethers.constants.AddressZero);
  });

  it("check deploys 2nd safe correctly", async () => {
    const { users, gnosisSafe, safeFactory } = await loadFixture(
      deployWithSafe
    );
    const [, user2, user3] = users;

    const tx = await safeFactory
      .connect(user2)
      .createSafe([user2.address, user3.address], 2);
    const rc = await tx.wait();
    const event = rc.events!.find(
      (event) => event.event === "SafeCreated"
    ) as SafeCreatedEvent;

    const [safe2Address, byUser, index] = event.args;

    expect(byUser).to.eq(user2.address);
    expect(safe2Address).to.not.eq(ethers.constants.AddressZero);
    expect(await safeFactory.safesCount()).to.eq(2);
    expect(await safeFactory.getSafe(0)).to.eq(gnosisSafe.address);
    expect(await safeFactory.getSafe(index)).to.eq(safe2Address);
    expect(await safeFactory.safesLuT(gnosisSafe.address)).to.eq(true);
    expect(await safeFactory.safesLuT(safe2Address)).to.eq(true);
    expect(await safeFactory.safesLuT(user3.address)).to.eq(false);
  });

  it("check safe created with correct state", async () => {
    const { users, gnosisSafe } = await loadFixture(deployWithSafe);
    const [user1, user2, user3, user4] = users;
    expect(await gnosisSafe.signerCount()).to.eq(3);
    expect(await gnosisSafe.quorum()).to.eq(2);

    expect(await gnosisSafe.isSigner(user1.address)).to.eq(true);
    expect(await gnosisSafe.isSigner(user2.address)).to.eq(true);
    expect(await gnosisSafe.isSigner(user3.address)).to.eq(true);
    expect(await gnosisSafe.isSigner(user4.address)).to.eq(false);
  });

  it("check safe receives money", async () => {
    const { users, gnosisSafe } = await loadFixture(deployWithSafe);
    const [user1] = users;

    await expect(
      user1.sendTransaction({
        to: gnosisSafe.address,
        value: ethers.utils.parseEther("20"),
      })
    )
      .to.emit(gnosisSafe, "Deposit")
      .withArgs(
        user1.address,
        ethers.utils.parseEther("20"),
        ethers.utils.parseEther("20")
      );

    const balance = await (
      await ethers.provider.getBalance(gnosisSafe.address)
    ).toBigInt();

    expect(balance).to.eq(ethers.utils.parseEther("20").toBigInt());
  });

  it("check submitting multiple txs", async () => {
    const { users, gnosisSafe } = await loadFixture(deployWithSafe);
    const [user1, user2, user3, user4] = users;

    await user1.sendTransaction({
      to: gnosisSafe.address,
      value: ethers.utils.parseEther("20"),
    });

    let tx = await gnosisSafe.submitValueTransfer(
      user4.address,
      ethers.utils.parseEther("15")
    );

    await tx.wait();
    expect(await gnosisSafe.getTransactionCount()).to.eq(1);

    tx = await gnosisSafe.submitValueTransfer(
      user2.address,
      ethers.utils.parseEther("10")
    );

    await tx.wait();
    expect(await gnosisSafe.getTransactionCount()).to.eq(2);
  });

  it("check value transfer end-to-end", async () => {
    const { users, gnosisSafe } = await loadFixture(deployWithSafe);
    const [user1, user2, , user4] = users;

    await user1.sendTransaction({
      to: gnosisSafe.address,
      value: ethers.utils.parseEther("20"),
    });
    let tx = await gnosisSafe.submitValueTransfer(
      user4.address,
      ethers.utils.parseEther("15")
    );

    const rc = await tx.wait();
    const event = rc.events!.find(
      (event) => event.event === "SubmitTransaction"
    ) as SubmitTransactionEvent;

    const [, txIndex] = event.args;

    //check ConfirmTransaction event
    await expect(gnosisSafe.connect(user2).confirmTransaction(txIndex))
      .to.emit(gnosisSafe, "ConfirmTransaction")
      .withArgs(user2.address, txIndex);

    const bigNumberIndex = ethers.BigNumber.from(txIndex + "");

    const [, , , executedBefore] = await gnosisSafe.getTransaction(
      bigNumberIndex
    );

    //check tx state before execution
    expect(executedBefore).to.eq(false);

    //check ExecuteTransaction event
    await expect(gnosisSafe.executeTransaction(bigNumberIndex))
      .to.emit(gnosisSafe, "ExecuteTransaction")
      .withArgs(user1.address, bigNumberIndex);

    //check remainder balance
    expect(await ethers.provider.getBalance(gnosisSafe.address)).to.eq(
      ethers.utils.parseEther("5")
    );
    const [, , , executed, numConfirmations] = await gnosisSafe.getTransaction(
      bigNumberIndex
    );

    //check tx state after execution
    expect(executed).to.eq(true);
    expect(numConfirmations).to.eq(2);
  });
});
