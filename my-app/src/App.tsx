import React, { useState, useEffect } from 'react';
import './App.css';
import { ColonyRole } from '@colony/colony-js';
import { getColonyNetworkClient, Network } from '@colony/colony-js';
import { Wallet } from 'ethers';
import { InfuraProvider } from 'ethers/providers';

// This object includes a mapping of role ids to names

const MAINNET_NETWORK_ADDRESS = `0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef`;
const MAINNET_BETACOLONY_ADDRESS = `0x869814034d96544f3C62DE2aC22448ed79Ac8e70`;
const provider = new InfuraProvider();
const wallet = Wallet.createRandom();
const connectedWallet = wallet.connect(provider);



function App() {

  return (
    <div className="App">
      Hello world
      {console.log("colony Role", ColonyRole)}
    </div>

  );
}

export default App;
