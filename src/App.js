import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Components/Table";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("response", response.data);
        setData(response.data);
      })
      .catch((e) => console.log("error in fetching", e));
  }, []);

  return <>
  <Table cryptoData={data}></Table>
  </>;
};

export default App;
