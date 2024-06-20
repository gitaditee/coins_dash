import "./Sidebar.css";
import { AiTwotoneDashboard } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
function Sidebar({selecttab, setselectab}){
  const handleonclick=(tabname)=>{
    setselectab(tabname);
  }
  
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 bgcolor " style={{width: "150px"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Coins Portal</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" onClick={()=>{
        console.log("Dashboard Overview");
        handleonclick("Dashboard Overview")}}>
        <a href="#" class={`nav-link text-white align-text-center  ${selecttab === 'Dashboard Overview' && 'active'}`} aria-current="page">
          <svg class="bi pe-none me-2 " width="16" height="32"><use xlinkHref="#home"></use></svg>
          <AiTwotoneDashboard />
           Dashboard Overview         
        </a>
      </li>
      <li onClick={()=>{
        console.log("Login Monitoring");
        handleonclick("Login Monitoring")}}>
        <a href="#"class={`nav-link text-white align-text-center ${selecttab === 'Login Monitoring' && 'active'}`}>
          <svg class="bi pe-none me-2 text-light" width="16" height="32"><use xlinkHref="#speedometer2"></use></svg>
          <FcBusinessman />
          <br></br>
          Login Monitoring
        </a>
      </li>
      <li onClick={()=>{
        console.log("Memory Monitoring");
        handleonclick("Memory Monitoring")}}>
        <a href="#" class={`nav-link text-white align-text-center ${selecttab === 'Memory Monitoring' && 'active'}`}>
          <svg class="bi pe-none me-2 text-light" width="16" height="32"><use xlinkHref="#table"></use></svg>
          <FcPositiveDynamic />
          Memory Monitoring
        </a>
      </li>
      <li onClick={()=>{
        console.log("Perfromance Moniroting");
        handleonclick("Perfromance Moniroting")}}>
        <a href="#" class={`nav-link text-white align-text-center ${selecttab === 'Perfromance Moniroting' && 'active'}`}>
          <svg class="bi pe-none me-2 text-light" width="16" height="32"><use xlinkHref="#grid"></use></svg>
          <FcServices />
          Perfromance Moniroting
        </a>
      </li>
    </ul>

    <hr/>
    <ul class=" nav nav-pills flex-column ">    
    <li >
        <a href="#"class={`nav-link text-white  align-text-center${selecttab === 'Applied Pass' && 'active'}`}>
          <svg class="bi pe-none me-2 text-light" width="5" height="32"><use xlinkHref="#grid"></use></svg>
          <RiLogoutCircleRLine />
          Log out
        </a>
      </li>
      </ul>
  </div>
        </>
    )
}
export default Sidebar;