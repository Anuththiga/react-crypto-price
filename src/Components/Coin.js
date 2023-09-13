import React from "react";

const Coin = ({ id, coinName, icon, symbol, price, priceChange, marketCap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin-data">
          <div className="coin">
            <img src={icon} />
            <h1>{coinName}</h1>
            <p>{symbol}</p>
            <p>{price.toFixed(2)}</p>
            {priceChange < 0 ? (
              <p className="price-change red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="price-change green">{priceChange.toFixed(2)}%</p>
            )}
            <p>$ {marketCap.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
