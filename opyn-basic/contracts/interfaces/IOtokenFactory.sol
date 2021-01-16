// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

interface IOtokenFactory {
    function getOtokensLength() external view returns (uint256);

    function getOtoken(
		address underlyingAsset,
        address strikeAsset,
        address collateralAsset,
        uint256 strikePrice,
        uint256 expiry,
        bool isPut
    ) external returns (address);
}
