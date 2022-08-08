pragma solidity ^0.8.15;

contract KeyStorage {
    address private owner;
    
    
struct Point {
        uint256 x;
        uint256 y;
    }

  mapping(address => Point) public usersToKeys;

constructor(address quiltTokenAddress) {
        owner = msg.sender;
        
    }
function setUserKey(uint256 _x, uint256 _y) public {
        usersToKeys[msg.sender] = Point({x: _x, y: _y});
        
    }

    function getUserKey(address userAddress) public view returns (Point memory)
    {
        require(userAddress != address(0), "wrong address");

        return usersToKeys[userAddress];
    }
}