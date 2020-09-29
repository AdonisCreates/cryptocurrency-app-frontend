// rface + tab = creates an arrow function, pretty cool
import React from 'react'

const Coin = ({ name, image, symbol, price, volume}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto-coin" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data"></div>
                <div className="coin-price">${price}</div>
                {/* This will display the actual commas between the #s */}
                <p className="coin-volume">${volume.toLocaleString()}</p>
            </div>

            
        </div>
    )
}

export default Coin
