import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { Transactions } from "./Transactions";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [timestamp, setTimestamp] = useState();
  const [txns, setTxns] = useState();
  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });
  useEffect(() => {
    async function getTxns() {
      const block = await alchemy.core.getBlockWithTransactions(blockNumber);
      setTimestamp(block.timestamp);
      setTxns(block.transactions);
    }
    getTxns();
  }, [blockNumber]);
  return (
    <div className='App'>
      <div style={{ display: "block" }}>
        <p
          style={{
            color: "#222222",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          Block Number:
        </p>
        <p
          style={{
            color: "#353ef9",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          {blockNumber}
        </p>
      </div>
      <div style={{ display: "block" }}>
        <p
          style={{
            color: "#222222",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          Block Timestamp:
        </p>
        <p
          style={{
            color: "#353ef9",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          {timestamp}
        </p>
      </div>
      <div style={{ display: "block" }}>
        <p
          style={{
            color: "#222222",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          Block Timestamp:
        </p>
        <p
          style={{
            color: "#353ef9",
            fontWeight: "bold",
            display: "inline-flex",
          }}>
          {timestamp}
        </p>
      </div>
      <div
        style={{
          display: "block",
          height: "2px",
          background: "#000000",
          margin: "0px 40px",
        }}></div>
      <Transactions transactions={txns} />
    </div>
  );
}

export default App;
