import Card from "./Card";
function Perfromancemonitor(){
    const cards=[
        
            { bgcolor:"bg-primary-subtle",
              images :"./images/rows.png",
                title: "No. of Rows Occupied", 
                value: 10 },
              { bgcolor:"bg-success-subtle",
                images : "./images/column.png",
                title: "No. of Column Occupied", 
                value: 20 },
              { bgcolor:"bg-danger-subtle",
                images : "./images/index.png",
                title: "Total Index count",
                value: 30 }
        
    ]
    return(
        <>
        <div className="bg-secondary bg-gradient  bg-opacity-10">
        <div className="bg-white rounded-3 shadow rounded" style={{marginTop:"10px", width:"70%", marginLeft:"100px"}}>
        <div className="-bs-secondary-color ">
            <div class="container text-center  ">
  <div class="row row-cols-3">
  {cards.map((card) => (
                   <div  key={card && card.title}className="col">
                   <Card bgcolor={card.bgcolor} images={card.images} title={card.title} content={card.value}/>
                 </div>
          
  ))
}    
</div>
</div>
</div>
</div>
</div>
        </>
    )
}
export default Perfromancemonitor;