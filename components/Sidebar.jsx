import "./Sidebar.css";
import { AiTwotoneDashboard } from "react-icons/ai";
import { MdSupervisedUserCircle } from "react-icons/md";
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
        {/* ----------   side bar title ---------------- */}
            <div class="d-flex flex-column flex-shrink-0 p-3 bgcolor " style={{width: "180px"}}>
    <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none ">
      <svg class="bi pe-none me-2" width="16" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Coins Portal</span>
    </a>
    <hr/>

    {/* ------------------ side bar links --------------*/}
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" onClick={()=>{
       
        handleonclick("Dashboard Overview")}}>
        <a href="#" class={`nav-link  ${selecttab === 'Dashboard Overview' && 'active'}`} style={{textAlign:"left" }} >
          <svg class="bi pe-none me-2 " width="16" height="20"><use xlinkHref="#home"></use></svg>
         <div style={{marginRight:"5px", marginLeft:"50px"}}><AiTwotoneDashboard /></div>
         
           Dashboard Overview         
        </a>
      </li>
      <li onClick={()=>{
       
        handleonclick("Login Monitoring")}}>
        <a href="#"class={`nav-link  ${selecttab === 'Login Monitoring' && 'active'}`} style={{textAlign:"left"}}>
          <svg class="bi pe-none me-2 " width="16" height="20"><use xlinkHref="#speedometer2"></use></svg>
          <div style={{marginRight:"5px", marginLeft:"50px"}}><FcBusinessman/></div>
         
          Login Monitoring
        </a>
      </li>
      <li onClick={()=>{
        
        handleonclick("Memory Monitoring")}}>
        <a href="#" class={`nav-link ${selecttab === 'Memory Monitoring' && 'active'}` } style={{textAlign:"left"}}>
          <svg class="bi pe-none me-2 text-light" width="16" height="20"><use xlinkHref="#table"></use></svg>
          <div style={{marginRight:"5px" , marginLeft:"50px"}}> <FcPositiveDynamic /></div>
         
          Memory Monitor
        </a>
      </li>
      <li onClick={()=>{
        
        handleonclick("Perfromance Moniroting")}}>
        <a href="#" class={`nav-link  ${selecttab === 'Perfromance Moniroting' && 'active'}`} style={{textAlign:"left"}}>
          <svg class="bi pe-none me-2 text-light" width="16" height="20"><use xlinkHref="#grid"></use></svg>
          <div style={{marginRight:"5px" , marginLeft:"50px"}}><FcServices /></div>
         
          Performance Monitor
        </a>
      </li>
    </ul>

    <hr/>
    <ul class=" nav nav-pills flex-column ">    
    <li >
        <a href="#"class={`nav-link text-white ${selecttab === 'Applied Pass' && 'active'}`} style={{textAlign:"left"}}>
          <svg class="bi pe-none me-2 text-light" width="16" height="32"><use xlinkHref="#grid"></use></svg>
          <div style={{marginRight:"5px"}}><RiLogoutCircleRLine /></div>
          Log out
        </a>
      </li>
      </ul>
  </div>
        </>
    )
}
export default Sidebar;