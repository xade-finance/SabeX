// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "../HifiPoolRegistry.sol";

/// @title GodModeHifiPoolRegistry
/// @author Hifi
/// @dev Strictly for test purposes. Do not use in production.
contract GodModeHifiPoolRegistry is HifiPoolRegistry {
    function __godMode_trackPools(IHifiPool[] calldata pools_) external {
        for (uint256 i; i < pools_.length; i++) {
            pools[address(pools_[i])] = true;
        }
    }

    function __godMode_untrackPools(IHifiPool[] calldata pools_) external {
        for (uint256 i; i < pools_.length; i++) {
            pools[address(pools_[i])] = false;
        }
    }
}
