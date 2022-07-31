pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintableERC20 is ERC20 {
    // Variables
    mapping(address => uint) public lastMintTime;
    uint private interval;
    address public owner;
    address private whale1 = 0x71026E214A2d4E98b6F2fc214dD47dA7a1148705;
    address private whale2 = 0x1731E068F103e81ba72B9fe98994c536Bc935C22;
    address private whale3 = 0x731922B9a3CA398B0C9aD4E5Dd29B9c32fAF83a5;
    
    
    constructor(string memory _name, string memory _symbol) ERC20(_name,_symbol) {
        _mint(whale1, 100000000000000000000000);
        _mint(whale2, 100000000000000000000000);
        _mint(whale3, 100000000000000000000000);

        owner = msg.sender;
        interval = 3600;
    }
    
    function mintToken() public {
        require(lastMintTime[msg.sender] == 0 || block.timestamp > lastMintTime[msg.sender] + interval, 'You need to wait an hour between mints');
        _mint(msg.sender, 100000000000000000000);
        lastMintTime[msg.sender] = block.timestamp;
    }
    
    function canMint(address _address) public view returns (bool) {
        return lastMintTime[_address] == 0 || block.timestamp > lastMintTime[_address] + interval;
    }

    function setInterval(uint _newInterval) public onlyOwner {
        interval = _newInterval;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'Not owner');
        _;
    }
}