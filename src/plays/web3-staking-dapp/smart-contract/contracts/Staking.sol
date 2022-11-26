// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {
    address public admin;

    struct Stakers {
        uint256 stakerId;
        address stakerAddress;
        uint256 dateCreated;
        uint256 dateUnlocked;
        uint256 interestPercentage;
        uint256 amountStaked;
        uint256 interest;
        bool open;
    }
    Stakers staker;

    uint256 public totalStakers;

    mapping(uint256 => Stakers) public stakers;
    mapping(address => uint256[]) public stakerIdsByAddress;
    mapping(uint256 => uint256) public levels;

    uint256[] public lockPeriods;

    constructor() payable {
        admin = msg.sender;
        totalStakers = 0;

        levels[30] = 600;
        levels[90] = 1000;
        levels[180] = 1400;

        lockPeriods.push(30);
        lockPeriods.push(90);
        lockPeriods.push(180);
    }

    modifier onlyOwner() {
        require(admin == msg.sender, "Only owner can change it");
        _;
    }

    function stakeMatic(uint256 _numOfDays) external payable {
        require(
            levels[_numOfDays] > 0,
            "You need to stake for a longer period of time"
        );

        stakers[totalStakers] = Stakers(
            totalStakers,
            msg.sender,
            block.timestamp,
            block.timestamp + (_numOfDays * 1 days),
            levels[_numOfDays],
            msg.value,
            calculateInterest(levels[_numOfDays], msg.value),
            true
        );

        stakerIdsByAddress[msg.sender].push(totalStakers);
        totalStakers++;
    }

    function calculateInterest(uint256 _interest, uint256 _amount)
        private
        pure
        returns (uint256)
    {
        return (_interest * _amount) / 10000;
    }

    function getInterestRate(uint256 _numOfDays)
        external
        view
        returns (uint256)
    {
        return levels[_numOfDays];
    }

    function updateLockPeriod(uint256 _numOfDays, uint256 _interest)
        external
        onlyOwner
    {
        levels[_numOfDays] = _interest;
        lockPeriods.push(_numOfDays);
    }

    function getStakersById(uint256 _stakerId)
        external
        view
        returns (Stakers memory)
    {
        return stakers[_stakerId];
    }

    function getLockperiods() external view returns (uint256[] memory) {
        return lockPeriods;
    }

    function getStakerIdsByAddresses(address _address)
        external
        view
        returns (uint256[] memory)
    {
        return stakerIdsByAddress[_address];
    }

    function changeUnlockPeriod(uint256 _id, uint256 _newUnlockPeriod)
        external
        onlyOwner
    {
        stakers[_id].dateUnlocked = _newUnlockPeriod;
    }

    function withdrawMatic(uint256 _id) external {
        require(
            stakers[_id].stakerAddress == msg.sender,
            "You are not the staker"
        );
        require(stakers[_id].open == true, "Matic already withdrawn");

        stakers[_id].open = false;

        if (block.timestamp > stakers[_id].dateUnlocked) {
            uint256 amount = stakers[_id].amountStaked + stakers[_id].interest;
            payable(msg.sender).call{value: amount}("");
        } else {
            payable(msg.sender).call{value: stakers[_id].amountStaked}("");
        }
    }
}
