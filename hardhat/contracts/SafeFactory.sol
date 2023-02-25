// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./GnosisUntitled.sol";

/// @title Untitled Gnosis
/// @author Untitled_Team
/// @dev can be paused
contract SafeFactory is Ownable, Pausable {
    GnosisUntitled[] private safes;
    mapping(address => bool) public safesLuT;
    uint256 public safesCount;

    event SafeCreated(
        address indexed safeAddress,
        address indexed byUser,
        uint256 index
    );

    /// @notice Create a new safe and emit its address in the event
    function createSafe(
        address[] memory _signers,
        uint256 _quorum
    ) external payable whenNotPaused returns (address, uint256) {
        try new GnosisUntitled{value: msg.value}(_signers, _quorum) returns (
            GnosisUntitled g
        ) {
            safes.push(g);
            address gAddress = address(g);
            safesLuT[gAddress] = true;
            uint256 index = safesCount;

            safesCount++;

            emit SafeCreated(gAddress, msg.sender, index);
            return (gAddress, index);
        } catch Error(string memory reason) {
            revert(reason);
        }
    }

    function pause() external whenNotPaused onlyOwner {
        _pause();
    }

    function unpause() external whenPaused onlyOwner {
        _unpause();
    }

    /// @dev Can be used to get the list of all safes on the Front-end
    function getSafe(uint256 index) external view returns (address) {
        return address(safes[index]);
    }

    /// @dev Can be used to get the list of all safes on the Front-end
    function getNumberOfSafes() external view returns (uint256) {
        return safes.length;
    }
}
