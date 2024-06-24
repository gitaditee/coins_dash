function Card({ title, content,images,bgcolor}){
    return(
        <>
          <div class={`rounded border border-success p-2 border-opacity-10 area-card hover-shadow ${bgcolor} rounded card mb-3`} >
    <div className="row g-0 "style={{alignItems:"center"}}>
    <div class=" col-md-4">
  {/* -------------------------- passing the images by props --------------------- */}
      <img  className="img-fluid rounded-start " style={{width:"50px"}} src={images} alt="menu-img"/>
    </div>
    <div class="col-md-8">
        <div class="card-body ">

    {/* ------------------------------ passing the values by props -------------- */}
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