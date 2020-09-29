// rface + tab = creates an arrow function, pretty cool
import React from 'react'

const Coin = ({ name, image, symbol, price, volume, priceChange}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto-coin" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                {/* localestring will display the actual commas between the #s */}
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                {/* using a ternary operator, so if there's a change in the coin's price < 0, it will turn red */}
                {priceChange < 0 ? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
            }
            </div>
        </div>
    </div>
    )
}

export default Coin
