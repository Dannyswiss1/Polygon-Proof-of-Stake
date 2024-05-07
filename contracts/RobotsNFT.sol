// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract RobotsNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("Dannyswiss", "SWS") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmTTp8oACX42WHdF4yQfVUqrEyoL3pFCnjG4CkGtHqUprW/";
    }

    function promptDescription() external pure returns (string memory) {
        return "NFT robot images";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
