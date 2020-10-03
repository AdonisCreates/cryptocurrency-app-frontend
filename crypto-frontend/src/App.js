import React, {useState, useEffect } from 'react';
import axios from 'axios'
import Coin from './Coin';
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  // using promises here, something has to happen then this will happen
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=22&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
    .catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // function to filter coins
  // forces all inputs to be lowered, so if someone types Bitcoin, BItcoin or bitcoin it all renders the same way
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="coin-app">
       <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/new"
            render={(props) => {
              return (
                <New
                />
              );
            }}
          />
        </Switch>
      <NavBar LogInForm={LogInForm} />
      <div className="coin-search">
        <h1 className="coin-text">Search for a coin</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div> 
      {filteredCoins.map(coin => {
        return <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
          />
        
      })}
    </div>
  );
}
export default App;