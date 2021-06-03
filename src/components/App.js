import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [data, setdata]=useState([])
  const [wallet, setWallet] = useState(100);
  
  useEffect(() =>{
    fetch(API)
      .then(r => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setdata(updatedSushis);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = data.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setdata(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  const eatenSushis = data.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushis={data} onEatSushi={handleEatSushi}/>
      <Table  wallet={wallet} plates={eatenSushis}/>
    </div>
  );
}

export default App;
