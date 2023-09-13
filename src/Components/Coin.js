import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = ({ id, coinName, icon, symbol, price, priceChange, marketCap }) => {
  let navigate = useNavigate();

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin-data">
          <div className="coin">
            <img src={icon} />
            <h1 className="coin-name">{coinName}</h1>
            <p className="coin-symbol">{symbol}</p>
            <p className="coin-price">{price.toFixed(2)}</p>
            {priceChange < 0 ? (
              <p className="price-change red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="price-change green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-volume">$ {marketCap.toLocaleString()}</p>
            <button onClick={() => navigate(`/coin-page/${id}`)}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
