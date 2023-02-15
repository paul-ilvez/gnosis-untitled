// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "./GnosisUntitled.sol";

contract SafeFactory {
    event SafeCreated(
        address indexed safeAddress,
        address indexed byUser,
        uint256 index
    );

    GnosisUntitled[] private safes;
    mapping(address => bool) public safesLuT;
    uint256 public safesCount;

    function createSafe(address[] memory _signers, uint256 _quorum)
        external
        payable
        returns (address, uint256)
    {
        //TODO: wrap in try-catch
        GnosisUntitled g = new GnosisUntitled{value: msg.value}(
            _signers,
            _quorum
        );

        safes.push(g);
        address gAddress = address(g);
        safesLuT[gAddress] = true;
        uint256 index = safesCount;

        safesCount++;

        emit SafeCreated(gAddress, msg.sender, index);
        return (gAddress, index);
    }

    function getSafe(uint256 index) external view returns (address) {
        return address(safes[index]);
    }

    function getNumberOfSafes() external view returns (uint256) {
        return safes.length;
    }
}
