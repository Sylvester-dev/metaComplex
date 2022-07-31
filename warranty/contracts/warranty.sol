//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract VirtualWarranty is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    address payable owner;

    //The structure to store info about a listed token
    struct ListedItem {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 expiryTime;
    }

    //the event emitted when a token is successfully listed
    event ItemListedSuccess (
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 expiryTime  
    );

    //mapping tokenId to Item
    mapping(uint256 => ListedItem) private idToListedItem;

    constructor() ERC721("VirtualWarranty", "VRW") {
        owner = payable(msg.sender);
    }

    function getListedItemForId(uint256 tokenId) public view returns (ListedItem memory) {
        return idToListedItem[tokenId];
    }

    function getCurrentItem() public view returns (uint256) {
        return _tokenIds.current();
    }

    //The first time a Item is created, it is listed here
    function createItem(string memory tokenURI) public payable returns (uint) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createListedItem(newTokenId);
        return newTokenId;
    }

    //Helper function to update Global variables and emit an event
    function createListedItem(uint256 tokenId) private {
        idToListedItem[tokenId] = ListedItem(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            0
        );

        _transfer(msg.sender, address(this), tokenId);

        emit ItemListedSuccess(
            tokenId,
            address(this),
            msg.sender,
            0
        );
    }


// When item is sold for first time then generate its warranty
    function onSale(uint256 tokenId , uint warrantyTime) public payable {

        require(warrantyTime > 0, "Invalid Warranty Time");

        //to check if product nft is getting sold first time then we issue warranty 
        if(idToListedItem[tokenId].expiryTime == 0){
            idToListedItem[tokenId].expiryTime  =  block.timestamp + warrantyTime;
        }

        idToListedItem[tokenId].seller = payable(msg.sender);
        
        _itemsSold.increment();

        //Token transfer to new owner
        _transfer(address(this), msg.sender, tokenId);
        //Approve the marketplace to sell NFTs for you
        approve(address(this), tokenId);
    }

//To check and end warranty on expiryTime
    function BurnWarranty(uint256 tokenId) public payable {
        require(idToListedItem[tokenId].expiryTime != 0,"The warranty has not yet been issued");
        require(owner == msg.sender || idToListedItem[tokenId].seller == payable(msg.sender)  ,"This warranty must be owned by you");
        require(block.timestamp>idToListedItem[tokenId].expiryTime,"The warranty has not yet expired");
        _burn(tokenId);
        idToListedItem[tokenId].seller = payable(0x0000000000000000000000000000000000000000); //address(0)
        idToListedItem[tokenId].owner = payable(0x0000000000000000000000000000000000000000);
    }
}

//0x1bCD612f4AA65daB8acB5421705AB4C586313D9A