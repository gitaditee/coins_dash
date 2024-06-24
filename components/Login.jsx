import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import "./image.css";
function Login(){
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };
   const submitform=(event)=>{
    event.preventDefault();
    alert("login successfully");
   };
    return (
        <>
        <Header></Header>
        <Header2></Header2>
        {/* ------------------------------------- login card--------------------------------- */}
      
        <div class="card shadow p-3 mb-5 rounded bg-primary bg-gradient bg-opacity-25" style={{width: "840px",height:"400px", marginLeft:"500px", marginTop:"50px"}}>
  <div class="row">
    <div class="col-md-4">
      <img src="./images/3556960.jpg" class="img-fluid rounded"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Login Page</h5>


        {/* ---------------------------- login form --------------------------------------- */}
        <form onSubmit={submitform}>
          
  <div class="row mb-3">
    <label for="inputEmail3" class=" col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class=" col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Remember Me
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn login-btn "onClick={handleLogin}>Log in</button>

</form>
      </div>
    </div>
  </div>
</div>

        
        </>
    );
}
 export default Login;