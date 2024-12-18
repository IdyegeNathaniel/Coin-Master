import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-58SPmh2WrZGG5Qxra1foS6wg",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {}, []);
  return (
    <section>
      <h1>Coin: {coinId}</h1>
    </section>
  );
};

export default Coin;
