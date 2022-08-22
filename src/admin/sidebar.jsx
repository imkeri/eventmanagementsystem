import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './css/sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import TableChartIcon from '@mui/icons-material/TableChart';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Sidebar = () => {
  const [responsive,setresponsive] = useState(false)
  return (
    <>
      <nav className="navbar2">
        
        <div className='border_div'>
       
        <a href='' className='logo2' ><img src="/assets/img/logo.png" alt="" title="" /></a>
        </div>
      
          <ul className={ responsive ? "nav_links_responsive" :"navbar_links "}
          onClick={() => setresponsive(false)}>
         
            <li><NavLink to="/dashborad"><DashboardIcon/> Dashboard</NavLink></li><br></br>
            <li><NavLink to="/events"><ListAltIcon /> Events</NavLink></li><br></br>
            <li><NavLink to="/contact"><TableChartIcon /> Contact</NavLink></li><br></br>
            <li><NavLink to="/ticketdata"><BookIcon /> TicketData</NavLink></li>
          </ul>
          <button className='mobile_menu_icon'
          onClick={()=> setresponsive(!responsive)}>
            { responsive ? (
              <i className='fas fa-times'></i>
              ) : (
              <i className='fas fa-bars'></i>
            )}
          </button>
        </nav>
      </>
  )
}

export default Sidebar
