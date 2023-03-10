import React, { useState } from "react";

function Sushi({image, name, price, plateHandler, wallet}) {
  
  const [eat, setEat] = useState(true)

  function handleEating(){
    if (wallet - parseInt(`${price}`) < 0 ){
      return null
    } console.log(wallet)
    return(plateHandler(`${price}`), setEat(false))
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEating}>
        {/* Tell me if this sushi has been eaten! */}
        {eat === false ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
