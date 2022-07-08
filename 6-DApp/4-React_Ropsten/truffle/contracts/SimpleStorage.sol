// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract SimpleStorage {
  uint256 value;

  event NewValueSetted(address _address);

  function get() public view returns (uint256) {
    return value;
  }

  function set(uint256 newValue) public {
    value = newValue;
    emit NewValueSetted(msg.sender);
  }
}
