import React, {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [aquireSushi, setAquireSushi] = useState ([])
  const [getPlates, setGetPlates] = useState([])
  const [walletAmount, setWalletAmount] = useState(100)

  useEffect (()=>{
    fetch(API)
    .then (r =>r.json())
    .then(data => setAquireSushi(data))
    .catch (error => console.log ("issue with start up"))
  }, [])

  function handleGetPlates(price){
    setGetPlates([...getPlates, parseInt(price)])
    setWalletAmount(walletAmount - parseInt(price))
  }

  return (
    <div className="app">
      <SushiContainer sushis = {aquireSushi}
       handlePlates = {handleGetPlates} 
       wallet={walletAmount}/>
      <Table 
      plates={getPlates} wallet={walletAmount}/>
    </div>
  );
}

export default App;
