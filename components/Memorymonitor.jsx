import Card from "./Card";
function Memorymonitor(){
    const cards = [
        { images :" ./images/dailyuser.png",
          title: "Memory Occupied By DataBase ", 
          value: 10 },
        { images : "./images/monthlyuser.png ",
          title: "Empty Rows Feild ", 
          value: 20 },
        { images : "./images/total.png",
          title: "Total No. of Indexes ",
           value: 30 },
       
      ];
        return(
            <>
                <div class="container text-center ">
      <div class="row row-cols-3">
      {cards.map((card) => (
              <div  key={card && card.title}className="col">
                <Card images={card.images} title={card.title} content={card.value}/>
              </div>
      ))
    }    
      </div>
    </div>
                
            </>
        );
    }

export default Memorymonitor;