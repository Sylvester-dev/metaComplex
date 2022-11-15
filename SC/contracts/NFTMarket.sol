// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// Created a Marketplace Smart contract to buy and sell NFT with your custom ERC20 token.
// The candidate can use the standard library if needed.
// Functionalities:
// Buy, Sell, and Mint NFT
// Has created 3 different SC For ERC20, ERC721, and Marketplace.
contract NFTMarket is ReentrancyGuard {
    address public mgTokenAddress;
    address payable owner;


    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold; // (_itemsLeft = _itemIds - _itemsSold)

    //address _mgTokenAddress
    constructor(address _mgTokenAddress) {
        mgTokenAddress = _mgTokenAddress;
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idTtoMarketItem;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    event MarketItemSold(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address buyer,
        uint256 price,
        bool sold
    );

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must at least be 1 mg-wei");
        
        _itemIds.increment();
        uint256 itemId = _itemIds.current();
        idTtoMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    function createMarketSale(address nftContract, uint256 itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = idTtoMarketItem[itemId].price;
        uint256 tokenId = idTtoMarketItem[itemId].tokenId;

        // first approve this NFTMarket contract for these many tokens via mgToken - via script, API, etc or in remix
        IERC20(mgTokenAddress).transferFrom(msg.sender, address(this), price); //transfer tokens to NFTMarket
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId); //transfer NFT to buyer
        idTtoMarketItem[itemId].owner = payable(msg.sender);
        idTtoMarketItem[itemId].sold = true;
        _itemsSold.increment();
        emit MarketItemSold(
            itemId,
            nftContract,
            tokenId,
            idTtoMarketItem[itemId].seller,
            msg.sender,
            price,
            true
        );
        IERC20(mgTokenAddress).transfer(idTtoMarketItem[itemId].seller, price); //transfer tokens to seller from NFTMarket
    }

    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idTtoMarketItem[i + 1].owner == address(0)) {
                uint256 currentId = idTtoMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idTtoMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idTtoMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idTtoMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = idTtoMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idTtoMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idTtoMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idTtoMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = idTtoMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idTtoMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
