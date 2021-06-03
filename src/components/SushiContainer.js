import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"



function SushiContainer({sushis, onEatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0);


  

  const sushiComponents = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi}/>
    ));

    function handleClickMore() {
      setSushiIndex((sushiIndex) => (sushiIndex + 4) );
    }
   
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton clickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
