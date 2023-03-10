import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handlePlates, wallet}) {
  const [sushiInfo, setSushiInfo] = useState (1)

  const start = sushiInfo
  const end = (sushiInfo + 4)
  
  const beltDishes = sushis.filter((sushi) => {return sushi.id >= start && sushi.id < end})

  function handleMore(){
    if (end > 100){
      return setSushiInfo(1)
    } return setSushiInfo(end)
  }

  const renderSushi = beltDishes.map((dish) => {
    return (
      <Sushi
          key={dish.id}
          image={dish.img_url}
          name={dish.name}
          price={dish.price}
          plateHandler={handlePlates}
          wallet={wallet}
      />
    )
  })
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {renderSushi}
      <MoreButton moreSushi ={handleMore} />
    </div>
  );
}

export default SushiContainer;
