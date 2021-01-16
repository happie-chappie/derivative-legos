// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "hardhat/console.sol";
import "./interfaces/IOtokenFactory.sol";

contract DeriOneV1OpynV2 is Ownable {
	using SafeMath for uint256;

	address constant OtokenFactoryAddress  =
		0x7C06792Af1632E77cb27a558Dc0885338F4Bdf8E;
    address constant USDCTokenAddress =
        0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address constant WETHTokenAddress =
        0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address[] public oTokenAddressList;
	address tracker;

	IOtokenFactory public OtokenFactoryInstance;
	uint256 public length;

    constructor() public {
		instantiateOtokenFactory();
    }

    function instantiateOtokenFactory()
        public
        onlyOwner
    {
		OtokenFactoryInstance = IOtokenFactory(OtokenFactoryAddress);
    }

	function getOtokensInARange() external {
		console.log("==== the list of addresses ======");
        for (uint256 i = 790; i < 810; i++) {
			tracker = OtokenFactoryInstance.getOtoken(
				WETHTokenAddress,
				USDCTokenAddress,
				USDCTokenAddress,
				i*100000000,
				1610697600,
				true
			);
			if ( tracker !=  address(0)) {
				console.log(tracker);
				oTokenAddressList.push(tracker);
			}
        }
		console.log("================================");
	}

	function getOtokensLength() external {
		length = OtokenFactoryInstance.getOtokensLength();
	}

}
