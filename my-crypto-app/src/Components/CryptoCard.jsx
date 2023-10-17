// src/components/CryptoCard.js
import React from 'react';

const CryptoCard = ({ crypto }) => {
  const { name, symbol, price } = crypto;

  return (
    <div className="crypto-card">
      <h3>{name}</h3>
      <p>{symbol}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default CryptoCard;
