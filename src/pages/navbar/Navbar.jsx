import { Link, NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import './navbar.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const email = localStorage.getItem("email");
  console.log(email)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  function logout(e) {
    e.preventDefault();
   
    if (window.confirm("are you sure?")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }
  return (
    <>
      <header id="header" class="d-flex align-items-center ">
        <div class="container-fluid container-xxl d-flex align-items-center">
          <div id="logo" class="me-auto">
            <NavLink to="/" className="scrollto"><img src="assets/img/logo.png" alt="" title="" /></NavLink>
          </div>
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/venue">Venue</NavLink></li>
              <li><NavLink to="/contect">Contact</NavLink></li>
            </ul>
            {/* <SubjectIcon className='mobile-nav-toggle'/> */}
          </nav>
          <Link to="/buytickets" class="buy-tickets scrollto">Buy Tickets</Link>
          <div className='drop-down'>
            <div class="dropdown show">
              <a class="btn dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><AccountCircleIcon style={{color:"white"}} /></a>
              <div class="dropdown-menu" aria-labelledby="actions" >
              <Link to="/ticketdata" className='btn' style={{color:"#060c22",margin:"0px",border:"none"}}>user profile</Link>
              <hr></hr>
              <Button onClick={(e)=>logout(e)} style={{color:"#060c22",margin:"0px"}}>Log Out</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
