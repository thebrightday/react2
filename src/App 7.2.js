import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [MYUSD, setMYUSD] = useState("");
  const onChange = (event) => setMYUSD(event.target.value);

  const [COST, setCOST] = useState();

  const SelectCoin = (event) => {
    setCOST(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={SelectCoin}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD)
            </option>
          ))}
        </select>
      )}
      <h2>Please write money you have</h2>
      <div>
        <input
          value={MYUSD}
          type="number"
          onChange={onChange}
          placeholder="write your USD"
        />
        $<h2>You can get {MYUSD / COST}</h2>
      </div>
    </div>
  );
}

export default App;
