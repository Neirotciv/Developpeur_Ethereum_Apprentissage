// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.14;
 
contract SimpleStorage {
   uint data; //Cette variable est intialisé avec une valeure précise
  
  function set(uint _number) external {
    data = _number;
  }

  function get() public view returns (uint) {
    return data;
  }
}