// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GemanepaToken is ERC20{
    constructor(uint256 totalSupply) ERC20("Gemanepa Protocol", "GEMANEPA"){
        _mint(msg.sender, totalSupply);
    }
}