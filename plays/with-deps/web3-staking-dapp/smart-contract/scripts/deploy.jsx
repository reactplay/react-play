import { ethers, waffle } from 'hardhat';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const [signer1, signer2] = await ethers.getSigners();

  const Staking = await ethers.getContractFactory('Staking', signer1);

  const staking = await Staking.deploy({
    value: ethers.utils.parseEther('0.4')
  });

  await staking.deployed();

  const provider = waffle.provider;
  let data;
  let transaction;
  let receipt;
  let block;
  let newUnlockDate;

  data = { value: ethers.utils.parseEther('0.01') };
  transaction = await staking.connect(signer2).stakeMatic(30, data);

  data = { value: ethers.utils.parseEther('0.15') };
  transaction = await staking.connect(signer2).stakeMatic(180, data);

  data = { value: ethers.utils.parseEther('0.1') };
  transaction = await staking.connect(signer2).stakeMatic(180, data);

  data = { value: ethers.utils.parseEther('0.3') };
  transaction = await staking.connect(signer2).stakeMatic(90, data);
  receipt = await transaction.wait();
  block = await provider.getBlock(receipt.blockNumber);
  newUnlockDate = block.timestamp - 60 * 60 * 24 * 1000;
  await staking.connect(signer1).changeUnlockPeriod(3, newUnlockDate);

  data = { value: ethers.utils.parseEther('0.12') };
  transaction = await staking.connect(signer2).stakeMatic(180, data);
  receipt = await transaction.wait();
  block = await provider.getBlock(receipt.blockNumber);
  newUnlockDate = block.timestamp - 60 * 60 * 24 * 1000;
  await staking.connect(signer1).changeUnlockPeriod(4, newUnlockDate);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(() => {
  process.exitCode = 1;
});
