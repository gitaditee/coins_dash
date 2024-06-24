import { useState } from 'react'

import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'
import Dashbd from '../components/Dashbd'
import Perfromancemonitor from '../components/Performancemonitor'
import Memorymonitor from '../components/Memorymonitor'
import LoginMonitor from '../components/LoginMonitor'


function Home(){
    const [selecttab,setselectab]=useState("Dashboard Overview");
     return(
        <>
     {/*  ------------ side bar --------- */}
     <div className='container-app'>
     <Sidebar selecttab={selecttab} setselectab={setselectab}></Sidebar>
  
     {/* -------- header bar--------------- */}
     <div className='header-app'>
      <Header></Header>
      <Header2></Header2>
  
      {/*  ---------- side bar links ---------- */}
      {selecttab === "Dashboard Overview" ? <Dashbd></Dashbd>:
     selecttab === "Login Monitoring" ? <LoginMonitor></LoginMonitor> : 
    selecttab === "Memory Monitoring" ? <Memorymonitor></Memorymonitor> :
    selecttab === "Perfromance Moniroting" ? <Perfromancemonitor></Perfromancemonitor> : null
    }
      </div>
      </div>
      </>
     )
}
export default Home;