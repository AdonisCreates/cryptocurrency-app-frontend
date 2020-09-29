import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false



function App() {
  const [coins, setCoins] = useState([])

  // using promises here, something has to happen then this will happen
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
  })



  return (
    <div className="App">
      <h1>Let's get this API going!</h1>
    </div>
  );
}

export default App;
