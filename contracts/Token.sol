//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract Token {
    string public name = "First Token";
    string public symbol = "FT";

    uint256 totalSupply = 100000;
    address owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
    

    function transfer(address _to, uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Given amount exceeds the total supply");

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);

    }


    function balanceOf(address _account) external view returns (uint256) {
        return balances[_account];
    }



}


