import { useState } from "react";
import Card from "./Card";
import "./LoginMonitor.css";
function LoginMonitor(){
  const cards = [
    { images :"./images/dailyuser.png",
      title: "Daily Active User Login (DAU)", 
      value: 10 },
    { images : "./images/monthlyuser.png",
      title: "Monthly Active User Login  (MAU)", 
      value: 20 },
    { images : "./images/total.png",
      title: "Total Active User Login (TAU)",
      value: 30 },
    { images : "./images/activereg.png",
      title: "Newly Registered Users ",
      value: 30 },
    { images : "./images/totalreg.png",
      title: "Active Registered Users",
      value: 30 },
    { images : "./images/newreg.png",
      title: "Total Registered Users",
      value: 30 },
  ];
    return(
        <>
        <div className="-bs-secondary-color">
            <div class="container text-center  ">
  <div class="row row-cols-3">
  {cards.map((card) => (
          <div  key={card && card.title}className="col">
            <Card images={card.images} title={card.title} content={card.value}/>
          </div>
  ))
}    
  </div>
</div>
</div>
        </>
    );
}
export default LoginMonitor;