import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [exchange, setExchange] = useState([]);
  const [MYUSD, setMYUSD] = useState("");
  const onChange = (event) => setMYUSD(event.target.value);

  const [COST, setCOST] = useState();

  const SelectCoin = (event) => {
    setCOST(event.target.value);
  };
  const Exchange = exchange.map((usevalue) => usevalue.openingPrice);

  function setCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD"
    )
      .then((response) => response.json())
      .then((json) => {
        setExchange(json);
      });
  }, []);

  return (
    <div>
      <h1>코인가격 알려드림 (코인개수 : {coins.length}개)</h1>

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
      <h2>현재가격(KWR)</h2>
      {COST ? <span>{setCommas(Math.round(COST * Exchange))}원</span> : null}
      <h2>
        달러를 입력하세요 <br />
        Please write money you have
      </h2>
      <div>
        <input
          value={MYUSD}
          type="number"
          onChange={onChange}
          placeholder="write your USD"
        />
        $<h2>코인 {MYUSD / COST}개</h2>
      </div>
    </div>
  );
}

export default App;
