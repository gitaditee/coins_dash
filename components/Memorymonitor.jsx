import Card from "./Card";
function Memorymonitor(){
    const cards = [
        { bgcolor:"bg-warning-subtle",
          images :" ./images/occupiedb.png",
          title: "Memory Occupied By DataBase ", 
          value: 10 },
        {  bgcolor:"bg-info-subtle",
           images : "./images/emptydb.png ",
          title: "Empty Rows Feild ", 
          value: 20 },
        
       
      ];
        return(
            <>
             <div className="bg-secondary bg-gradient  bg-opacity-10">
             <div className="bg-white rounded-3 shadow rounded" style={{marginTop:"10px", width:"55%", marginLeft:"100px"}}>
                <div class="container text-center ">
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
            </>
        );
    }

export default Memorymonitor;