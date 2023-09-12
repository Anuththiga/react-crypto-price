import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Refresh from '../Images/refresh.png';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        handleRefresh();
    }, [])

    const handleRefresh = () => {
        setIsLoading(true);
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100")
            .then((response) => {
                console.log(response.data);
                setIsLoading(false);
                setCoins(response.data);
            });
    }

  return (
    <div className='app'>
        <div className='header-container'>
            <h1>Crypto Checker</h1>
            <div className='button-container'>
                <input 
                    type='text'
                    placeholder='Search for a Coin'
                />
                <img src={Refresh} onClick={handleRefresh} />
            </div>
        </div>
    </div>
  )
}

export default HomePage