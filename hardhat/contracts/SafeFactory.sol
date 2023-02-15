// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "./Gnosis.sol";

contract SafeFactory {
    GnosisUntitled[] private safesArray;

    function createSafe(
        string memory _name,
        address[] memory _signers,
        uint256 _quorum
    ) external {
        GnosisUntitled g = new GnosisUntitled(_name, _signers, _quorum);
        safesArray.push(g);
    }
}
