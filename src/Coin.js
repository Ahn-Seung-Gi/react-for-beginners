import Button from "./Button";
import styled from "./App.module.css";
import { useEffect, useState } from "react";

// 입력된 값(돈)으로 얼마의 코인을 살수 있는가?
// select 에서 선택된 거를 몇개 살수 있는가

function App() {
    // useState area
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [selectName, setSelectName] = useState('');
    const [price, setPrice] = useState(0);
    // useState Set area
    const onChange = (event) => {setMoney(event.target.value)}
    const onChangeSelect = (event) => {
        let index = event.target.selectedIndex;
        let coin = coins[index];
        setSelectName(coin.name);
        setPrice(coin.quotes.USD.price);
    };
    // useEffect area
    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then( (response) => response.json())
        .then( (json) => {
        setCoins(json);
        setSelectName(json[0].name);
        setPrice(json[0].quotes.USD.price);
        setLoading(false);
        });
    }, []);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
        <h1> The Coins!  {loading ? "" : `(${coins.length})` }  </h1>
        <ul>
        <input value={money} onChange={onChange} type="number" placeholder="USD"/>
        </ul>
        
        {loading ? <strong>Loading...</strong> : 
        <select onChange={onChangeSelect}>
            {coins.map( (coin) => (
            <option key={coin.id}>
                {coin.name} ({coin.symbol}) : ${ coin.quotes.USD.price} USD
            </option>
            ))}
        </select>}

        <div>
            <h4>내가 선택한 코인 : {selectName}</h4> 
            <h4>내가 선택한 코인의 살수 있는 개수 : {money / price} </h4>
        </div>
        
        </div>
    );
}

export default App;
