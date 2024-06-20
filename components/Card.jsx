function Card({ title, content,images,bgcolor}){
    return(
        <>
          <div class={`rounded border border-success p-2 border-opacity-10 area-card shadow ${bgcolor} p-3 mb-5 rounded card mb-3`} >
    <div className="row g-0 "style={{alignItems:"center"}}>
    <div class=" col-md-4">

      <img  className="img-fluid rounded-start " style={{width:"50px"}} src={images} alt="menu-img"/>
    </div>
    <div class="col-md-8">
        <div class="card-body ">
    
    <b >{title}</b>
    <br></br>
    {content}
  
  </div>
  </div>
  </div>
  </div>
        </>
    )
}
export default Card;