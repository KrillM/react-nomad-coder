import { useEffect, useState } from "react";

const B_TodoList = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); 

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((res) => res.json())
        .then((json)=> {
            setCoins(json);
            setLoading(false);
        });
    }, [])

    return (
    <>
    <h1>The Coins ({coins.length})</h1>
    {loading ? (<strong>Loading...</strong>) : (
        <ul>
            {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
        </ul>
    )}
    </>
    )
}

export default B_TodoList;