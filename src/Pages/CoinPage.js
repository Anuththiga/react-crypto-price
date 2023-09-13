import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';
import Background from '../Images/background.jpeg';

function CoinPage() {
    let { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        axios.get(`https://api.coinstats.app/public/v1/coins/${id}`)
        .then((response) => {
            console.log(response.data.coin)
            setCoin(response.data.coin);
        })
    }, []);

    if(coin) {
        return (
            <div className='coinpage-container'
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
            <div className='coinpage-info'>
                <h1>{coin.name}</h1>
                <img src={coin.icon} className='coinpage-icon' alt='icon' />
                <div className='coinpage-data'>
                    <div className='coinpage-row'>
                        <h3 className='coinpage-row--header'>Symbol: </h3>
                        <h3 className='coinpage-row--data'>{coin.symbol}</h3>
                    </div>
                    <div className='coinpage-row'>
                        <h3 className='coinpage-row--header'>Current Price: </h3>
                        <h3 className='coinpage-row--data'>$ {Math.round(coin.price)}</h3>
                    </div>
                    <div className='coinpage-row'>
                        <h3 className='coinpage-row--header'>Market Cap: </h3>
                        <h3 className='coinpage-row--data'>$ {Math.round(coin.marketCap)}</h3>
                    </div>
                    <div className='coinpage-row'>
                        <h3 className='coinpage-row--header'>Total Volume: </h3>
                        <h3 className='coinpage-row--data'>$ {Math.round(coin.volume)}</h3>
                    </div>
                    <div className='coinpage-row'>
                        <h3 className='coinpage-row--header'>Total Supply: </h3>
                        <h3 className='coinpage-row--data'>{coin.totalSupply}</h3>
                    </div>
                </div>
                <Link to="/">
                    <div className='coinpage-backbutton'>Back</div>
                </Link>
            </div>
            </div>
          )
    } else {
        return null;
    }
}

export default CoinPage