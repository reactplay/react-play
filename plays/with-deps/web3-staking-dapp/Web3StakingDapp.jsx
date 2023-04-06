import PlayHeader from 'common/playlists/PlayHeader';
import React, { useState, useEffect } from 'react';
import artifact from './artifacts/contracts/Staking.sol/Staking.json';
import { ethers } from 'ethers';
import Navbar from './components/Navbar';
import maticLogo from './images/polygon-matic-logo.svg';
import { FaRupeeSign } from 'react-icons/fa';
import { ContractAddress } from './constant';

// WARNING: Do not change the entry componenet name
function Web3StakingDapp(props) {
  // Your Code Start below.

  // frontend states
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();

  // assets
  const [assets, setAssets] = useState([]);

  // staking
  const [stakeModal, setStakeModal] = useState(false);
  const [stakingLength, setStakingLength] = useState();
  const [stakingPercent, setStakingPercent] = useState();
  const [amount, setAmount] = useState(0);

  // functions
  const toWei = (ether) => ethers.utils.parseEther(ether);
  const toMatic = (wei) => ethers.utils.formatEther(wei);

  const onload = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const contract = new ethers.Contract(ContractAddress, artifact.abi);
      setContract(contract);
    } catch (err) {
      // DO NOT DO ANYTHING
      // THIS IS TO AVOID SNAP FAILURE
    }
  };

  useEffect(() => {
    onload();
  }, []);

  const isConnected = () => account !== undefined;

  const getAssetIds = async (address, account) => {
    const assetIds = await contract.connect(account).getStakerIdsByAddresses(address);

    return assetIds;
  };

  const getAssets = async (ids, account) => {
    const loopedAssets = await Promise.all(
      ids.map((id) => contract.connect(account).getStakersById(id))
    );

    loopedAssets.map(async (asset) => {
      const parsedAsset = {
        stakersId: asset.stakerId,
        percentInterest: Number(asset.interestPercentage) / 100,
        daysRemaining: daysRemaining(Number(asset.dateUnlocked)),
        maticInterest: toMatic(asset.interest),
        maticStaked: toMatic(asset.amountStaked),
        open: asset.open
      };

      setAssets((prev) => [...prev, parsedAsset]);
    });
  };

  const getAccount = async () => {
    await provider.send('eth_requestAccounts', []);

    const account = provider.getSigner();

    return account;
  };

  const connectAndLoadWallet = async () => {
    const account = await getAccount(provider);
    setAccount(account);

    const accountAddress = await account.getAddress();
    const assetIds = await getAssetIds(accountAddress, account);

    getAssets(assetIds, account);
  };

  const stakeMatic = () => {
    const wei = toWei(amount);
    const data = { value: wei };

    contract.connect(account).stakeMatic(stakingLength, data);
  };

  const stakingModal = (stakingLength, stakingPercent) => {
    setStakeModal(true);
    setStakingLength(stakingLength);
    setStakingPercent(stakingPercent);
  };

  const daysRemaining = (unlockDate) => {
    const currentTime = Date.now() / 1000;
    const remainingTime = unlockDate - currentTime;

    return Math.max((remainingTime / 60 / 60 / 24).toFixed(0), 0);
  };

  const withdraw = (stakersId) => {
    contract.connect(account).withdrawMatic(stakersId);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}

          <div>
            <div>
              <Navbar connect={connectAndLoadWallet} isConnected={isConnected} />
            </div>

            <div className=" bg-white rounded-xl md:rounded-3xl my-8 max-w-5xl block m-auto border-[0.5px] border-solid border-[#00f1fe80]">
              <div className=" px-3 py-5 md:px-8 md:py-8">
                <div className=" flex justify-center">
                  <span>
                    <img alt="matic logo" className=" w-8 h-8 lg:w-12 lg:h-12" src={maticLogo} />
                  </span>
                  <span className=" text-3xl lg:text-5xl font-semibold px-4 text-[#010326]">
                    Matic Market
                  </span>
                </div>

                <div className=" flex justify-between items-center my-6 md:my-8">
                  {stakeModal === false ? (
                    <>
                      <div className=" flex">
                        <button
                          className="bg-[#00f1fec5] hover:bg-[#00f1fe] px-2 rounded-lg"
                          type="submit"
                          onClick={() => stakingModal(30, '7%')}
                        >
                          <FaRupeeSign className="w-8" color="#010326" />
                        </button>

                        <div className="flex justify-center items-center flex-col-reverse font-bold px-2 text-[#010326]">
                          <span className="text-[#010326]">1 Month</span>
                          <span className="text-[#010326]">7%</span>
                        </div>
                      </div>

                      <div className=" flex">
                        <button
                          className="bg-[#00f1fec5] hover:bg-[#00f1fe] px-2 rounded-lg"
                          type="submit"
                          onClick={() => stakingModal(90, '10%')}
                        >
                          <FaRupeeSign className=" w-8" color="#010326" />
                        </button>

                        <div className="flex justify-center items-center flex-col-reverse font-bold px-2">
                          <span className="text-[#010326]">3 Months</span>
                          <span className="text-[#010326]">10%</span>
                        </div>
                      </div>

                      <div className=" flex">
                        <button
                          className="bg-[#00f1fec5] hover:bg-[#00f1fe] px-2 rounded-lg"
                          type="submit"
                          onClick={() => stakingModal(180, '14%')}
                        >
                          <FaRupeeSign className=" w-8" color="#010326" />
                        </button>

                        <div className="flex justify-center items-center flex-col-reverse font-bold px-2">
                          <span className="text-[#010326]">6 Months</span>
                          <span className="text-[#010326]">14%</span>
                        </div>
                      </div>
                    </>
                  ) : isConnected !== undefined ? (
                    <div className="flex flex-col justify-center items-center">
                      <div className="" onClick={(e) => e.stopPropagation()}>
                        <div className="">
                          <h2 className="text-[#010326] font-medium text-3xl mb-2">Stake Matic</h2>
                          <div className="flex items-center text-[#010326] font-medium text-2xl">
                            <div className="">
                              <input
                                className=" bg-slate-300 outline-none rounded-lg px-4 py-2"
                                placeholder="0.0"
                                type="number"
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </div>

                            <div className="text-[#010326] font-medium text-3xl px-3">
                              <span>Matic</span>
                            </div>
                          </div>

                          <div className="">
                            <h4 className="text-[#010326] font-medium text-2xl my-4">
                              {stakingLength} days @ {stakingPercent} APY
                            </h4>
                          </div>

                          <div className="">
                            <button
                              className="bg-[#00f1fec5] hover:bg-[#00f1fe] rounded-3xl px-2 py-1 text-base md:px-5 md:py-2 md:text-xl font-semibold text-[#010326]"
                              type="submit"
                              onClick={() => stakeMatic(amount)}
                            >
                              Stake Matic
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#010326] font-medium text-lg">
                      Connect Wallet to stake matic
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-3xl my-8 max-w-5xl block m-auto border-[1px] border-solid border-[#00f1fe80] text-center md:px-4">
              <div className="font-bold flex justify-center py-6">
                <span className="text-[#010326] text-3xl">Staked Assets</span>
              </div>

              <div>
                <ul className="font-semibold flex justify-between px-3">
                  <li className="text-[#010326]">Staked</li>
                  <li className="text-[#010326]">Interest</li>
                  <li className="text-[#010326]">Time Left</li>
                  <li className="text-[#010326]">Withdraw</li>
                </ul>
              </div>
              <br />

              {assets.length > 0 &&
                assets.map((asset, index) => (
                  <div
                    className="flex justify-between font-medium px-3 py-3 items-center"
                    key={index}
                  >
                    <div className="text-[#010326] text-center pl-4">{asset.maticStaked}</div>
                    <div className="text-[#010326] text-center pl-2">{asset.percentInterest} %</div>
                    <div className="text-[#010326] text-center pl-6">{asset.daysRemaining}</div>
                    <div className="pl-6">
                      {asset.open ? (
                        <button
                          className="bg-[#00f1fec5] hover:bg-[#00f1fe] rounded-2xl px-1 py-1 md:px-2 md:py-2 md:font-semibold text-[#010326]"
                          type="submit"
                          onClick={() => withdraw(asset.stakersId)}
                        >
                          Withdraw
                        </button>
                      ) : (
                        <span className="text-[#010326] bg-white">Closed</span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Web3StakingDapp;
