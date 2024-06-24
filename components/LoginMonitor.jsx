import { useState } from "react";
import Card from "./Card";
import "./LoginMonitor.css";
import DataCard from "./DataCard";
import Barchart from "./Barchart";
function LoginMonitor(){
  //  ------------------------ data -------------------

  const cards = [
    { bgcolor:"bg-primary-subtle",
      images :"./images/dailyuser.png",
      title: "Daily Active User Login (DAU)", 
      value: 10 
    },
    { 
      bgcolor:"bg-success-subtle",
      images : "./images/monthlyuser.png",
      title: "Monthly Active User Login  (MAU)", 
      value: 20 },
    {  bgcolor:"bg-danger-subtle",
      images : "./images/total.png",
      title: "Total Active User Login (TAU)",
      value: 30 },
    {  bgcolor:"bg-secondary-subtle",
      images : "./images/activereg.png",
      title: "Newly Registered Users ",
      value: 30 },
    {  bgcolor:"bg-warning-subtle",
      images : "./images/totalreg.png",
      title: "Active Registered Users",
      value: 30 },
    { 
      bgcolor:"bg-info-subtle",
      images : "./images/newreg.png",
      title: "Total Registered Users",
      value: 30 },
  ];
  const datcards=[
    {
      title:"",
      value:""
    }
  ]
    return(
        <>

        {/* -----------------------     passing values in card ------------ */}
        
        <div className="bg-secondary bg-gradient bg-opacity-10" style={{width:"100%", height:"100%"}}>
          <div style={{display:"flex"}}>
        <div className="bg-white rounded-3 shadow rounded" style={{marginTop:"10px", width:"70%", marginLeft:"20px"}}>
            <div class="container text-center">
  <div class="row row-cols-3">
    {/* <p>Login & Registration Report</p> */}
  {cards.map((card) => (
          <div  key={card && card.title} className="col">
            <Card  bgcolor={card.bgcolor} images={card.images} title={card.title} content={card.value}/>
          </div>
  ))
}    
</div>
</div>


 {/*   -------------------------- line chart in side -----------------------*/}
</div>
<div className="bg-white rounded-3 shadow rounded" style={{marginTop:"10px", width:"25%", marginLeft:"40px" }}>
   <Barchart></Barchart>
  
</div>
</div>
<br></br>

{/*  ---------------- cards in bottom ------------------------- */}
    <div className=" bs-secondary-color container text-center  row row-cols-3" style={{marginTop:"50px"}}>
      <div className="col">
            <DataCard></DataCard>
            </div>
            <div className="col">
            <DataCard></DataCard>
            </div>
            <div className="col">
            <DataCard></DataCard>
            </div>
      </div> 

      </div>

        </>
    );
}
export default LoginMonitor;