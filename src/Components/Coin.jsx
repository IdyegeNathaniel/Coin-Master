import { useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {};
  return (
    <section>
      <h1>Coin: {coinId}</h1>
    </section>
  );
};

export default Coin;
