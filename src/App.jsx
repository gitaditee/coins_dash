import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'
import DashBoardoverview from '../components/Dashboardoverview'
import Perfromancemonitor from '../components/Performancemonitor'
import Memorymonitor from '../components/Memorymonitor'
import LoginMonitor from '../components/LoginMonitor'
import "./index.css";

function App() {
  const [selecttab,setselectab]=useState("Dashboard Overview");

  return (
    <>
    <div className='container-app'>
   <Sidebar selecttab={selecttab} setselectab={setselectab}></Sidebar>
   <div className='header-app'>
    <Header></Header>
    <Header2></Header2>
    {selecttab=== "Dashboard Overview" ? <DashBoardoverview></DashBoardoverview> :
   selecttab === "Login Monitoring" ? <LoginMonitor></LoginMonitor> : 
  selecttab === "Memory Monitoring" ? <Memorymonitor></Memorymonitor> :
  selecttab === "Perfromance Moniroting" ? <Perfromancemonitor></Perfromancemonitor> : null
  }
    </div>
    </div>
    </>
  )
}

export default App
