// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract MasterAvaxToken {

    // Public variables that store the details about the token
    string public name = "Master Avax Token";
    string public symbol = "MAT";
    uint256 public totalSupply = 10;

    // Mapping of addresses to balances
    mapping(address => uint256) public balances;

    // Events for logging mint and burn actions
    event Mint(address indexed to, uint256 amount);
    event Burn(address indexed from, uint256 amount);

    // Constructor that initializes the token's total supply
    // and assigns the entire supply to the contract creator
    constructor() {
        balances[msg.sender] = totalSupply; // Assign the total supply to the contract creator
    }

    // Function to view the balance of a specific address
    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    // Function to mint new tokens and increase the balance of a specified address
    function mint(address _to, uint256 _amount) public {
        require(_to != address(0), "Invalid address");
        totalSupply += _amount;
        balances[_to] += _amount;
        emit Mint(_to, _amount); // Log the mint action
    }

    // Function to burn tokens and decrease the balance of a specified address
    function burn(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        totalSupply -= _amount;
        balances[msg.sender] -= _amount;
        emit Burn(msg.sender, _amount); // Log the burn action
    }
}
