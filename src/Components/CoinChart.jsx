import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const CoinChart = ({ coinsChart }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (coinsChart.prices) {
      coinsChart.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
        setData(dataCopy);
      });
    }
  }, [coinsChart]);
  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default CoinChart;
