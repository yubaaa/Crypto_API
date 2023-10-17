// src/components/CryptoList.js
import React from 'react';
import CryptoCard from './CryptoCard';

const CryptoList = ({ cryptos }) => {
  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default CryptoList;
