import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Refresh from '../Images/refresh.png';
import Coin from '../Components/Coin';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        handleRefresh();
    }, []);

    const filterCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleRefresh = () => {
        setIsLoading(true);
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100")
            .then((response) => {
                console.log(response.data.coins);
                setIsLoading(false);
                setCoins(response.data.coins);
            });
    };

  return (
    <div className='app'>
        <div className='header-container'>
            <h1>Crypto Checker</h1>
            <div className='button-container'>
                <input 
                    type='text'
                    placeholder='Search for a Coin'
                    onChange={handleSearch}
                />
                <img src={Refresh} onClick={handleRefresh} />
            </div>
        </div>
        <div className='coin-container'>
        {isLoading && <h1 className='loading-msg'>Data Loading...</h1>}
        {filterCoins.map((coin) => (
            <Coin 
                id={coin.id}
                coinName={coin.name}
                icon={coin.icon}
                symbol={coin.symbol}
                price={coin.price}
                priceChange={coin.priceChange1d}
                marketCap={coin.marketCap}
            />
        ))}
        </div>
    </div>
  )
}

export default HomePage