import "./header.css";

function Header(){
   
    return(
        <>
        <div className="head-container">
            <header class="d-flex flex-wrap justify-content-center ">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        
        <span class="fs-4 text"></span>
        <br></br>
        
      </a>
      <button type="button" class="btn btn-outline-light login">Log Out </button>
      <br></br>
      <select class="form-select lang-select btn btn-primary" >
  <option selected>English</option>
  <option value="1">Hindi</option>
  <option value="2">Telugu</option>
  <option value="3">Tamil</option>
</select>
    </header>
    </div>
        </>
    )
}
export default Header;