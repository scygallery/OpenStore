import React from "react";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress, collectionContract } from "../config";
import Card from "./Card";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    getItems("All");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getItems(filterCategory);
  }, [filterCategory]);

  const getItems = async (category) => {
    const getItemMetaByIdUrl = `https://ethereum-api.rarible.org/v0.1/nft/items/byCollection?collection=${collectionContract}&status=ACTIVE&size=100`;
    const getItemMetaResult = await fetch(getItemMetaByIdUrl);
    const itemsJson = await getItemMetaResult.json();
    let newItems = await Promise.all(
      itemsJson.items.map(async (d) => {
        // const tokenUri = await tokenContract.tokenURI(d.tokenId);
        const price = "1000 ether"; //ethers.utils.formatUnits(d.take.valueDecimal.toString(), "ether");
        const meta = d.meta;
        return {
          price,
          tokenId: parseInt(d.tokenId, 10),
          seller: "",
          owner: d.owners.join(", "),
          image: meta.image.url.PREVIEW,
          name: meta.name,
          description: meta.description,
        };
      })
    );
    setItems(newItems);
  };

  const buyNft = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const prov = new ethers.providers.Web3Provider(connection);

    const signer = prov.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      NFTMarket.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );
    const tx = await transaction.wait();
    console.log(tx);
    getItems("All");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ width: "200px" }}>
        <label htmlFor="category">Category:</label>{" "}
        <select
          name="category"
          id="category"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Art">Art</option>
          <option value="Graphics">Graphics</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0 ? (
          items.map((item, key) => (
            <Card key={key} buyNft={buyNft} data={item} />
          ))
        ) : (
          <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>
        )}
      </div>
    </div>
  );
};

export default ItemList;
