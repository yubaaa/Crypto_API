import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoList from './Components/CryptoList';
import './App.css';
const App = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coinranking.com/v2/coins'
        );
        setCryptos(response.data.data.coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <CryptoList cryptos={cryptos} />
    </div>
  );
};

export default App;
