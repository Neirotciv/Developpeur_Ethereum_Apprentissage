// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

/** @title Shape calculator. */
contract SimpleStorage {
   uint data;

    /** @dev Calculates a rectangle's surface and perimeter.
      * @param  x of the rectangle.
      */
    function set(uint x) public {
        data = x;
    }
    
    /** @dev Calculates a rectangle's surface and perimeter.
      * @return data The calculated surface.
      */
    function get() public view returns (uint) {
        return data;
    }
}