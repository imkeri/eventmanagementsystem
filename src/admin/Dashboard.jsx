import Sidebar from "./sidebar";
import './css/dashboard.css'
import { useNavigate } from 'react-router-dom'
import Widget from "./Widget";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./chart/Chart";
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { baseurl } from "../Baseurl";

const Dashborad = () => {
    const navigate  = useNavigate()
     function logout(e){
      alert("are you sure?");
       e.preventDefault();
       localStorage.removeItem("token");
       navigate("/"); 
     }
     const [data,setData] = useState([]);
     const [ticketdata,setticketdata] = useState([]);
     const [userdata,setUserdata] = useState([]);
     const getData = async() => {
      axios.get(`${baseurl}/event/count`).then((res) => {
          setData(res.data.data)
          
        }).catch((err) => {
          console.log(err);
        })
    }  
    const getticketData = async() => {
      axios.get(`${baseurl}/ticket/count`).then((res) => {
          setticketdata(res.data.data)
          
        }).catch((err) => {
          console.log(err);
        })
    } 
    const getUserData = async() => {
      axios.get(`${baseurl}/contact/count`).then((res) => {
          setUserdata(res.data.data)
          
        }).catch((err) => {
          console.log(err);
        })
    } 
  useEffect(()=>{
      getData();
      getticketData();
      getUserData();
  },[])
  
   
     
     return (
       <div className="dashboard">
          <div  className="sidebar">
          <Sidebar />
          </div>
          <div className="dashboard_main">
            <div className="Log_Out">
                <button className="btn" onClick={logout}>Log Out</button>
            </div>
            <div className="d-flex">
            <Widget count={data}
              title="Events"
              icon={<EventNoteIcon />}
              view="events"
            />
            <Widget count={ticketdata}
              title="Tickets"
              icon={<BookIcon />}
              view="ticketdata"

            />
            <Widget count={userdata}
              title="Users"
              icon = {<PersonIcon/>}
              view="contact"
            />
            </div>
            <Chart />
          </div>
       </div>
     )
   }
   
   export default Dashborad