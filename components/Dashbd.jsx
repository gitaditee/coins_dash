import Card from "./Card";
function Dashbd(){
    const cards = [
        { bgcolor:"bg-primary-subtle",
          images :"./images/dailyuser.png",
          title: "Login Vists", 
          value: 10 
        },
        { 
          bgcolor:"bg-success-subtle",
          images : "./images/monthlyuser.png",
          title: "Memory Status", 
          value: 20 },
        {  bgcolor:"bg-danger-subtle",
          images : "./images/total.png",
          title: "Performance Status",
          value: 30 }
      
      ];
    return(
        <>
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

</div>
        </>
    )
}
export default Dashbd;