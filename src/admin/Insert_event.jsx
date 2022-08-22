import React from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
import './css/inserevent.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../Baseurl';

const Insert_event = () => {
  const [data, setData] = useState([{
    e_name:"",
    e_venue:"",
    e_organizer:"",
    price:"",
    date:"",
    time:"",
}]);
  function insert(e){
    console.log("DAtA",data)
    e.preventDefault();
    axios.post(`${baseurl}/event/insert`,data)
    .then(res=>{
      console.log(res)
     window.location="/events"
    
    }).catch((error)=>{
      console.log(error)
    })
  }
 
  function handle(e){
    const {name,value}=e.target
    setData({...data, [name]:value})
    }
const navigate  = useNavigate()
     function logout(e){
       e.preventDefault();
       localStorage.removeItem("token");
       navigate("/"); 
     }
  return (
    <>
      <div className='new'>
        <div className="sidebar">
        <Sidebar/>
        </div>
     
        <div className='newContainer'>
            <div className="Log_Out">
                <button className="btn" onClick={logout}>Log Out</button>
            </div>
            <div className='top'>
               <h3>Add New Event</h3>
            </div>
            <div className='bottom'>
            <div className='right'>
              <form className='new_event_form' onSubmit={(e)=>insert(e)}>
                <div className='formInput'>
                  <label>e_name</label>
                  <input type="text" placeholder="Enter event name" name="e_name" value={data.e_name} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>e_venue</label>
                  <input type="text" placeholder="Enter event venue" name="e_venue" value={data.e_venue} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>e_organizer</label>
                  <input type="text" placeholder="Enter  event organizer " name="e_organizer" value={data.e_organizer} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>price</label>
                  <input type="text" placeholder="Enter price" name="price" value={data.price} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>date</label>
                  <input type="text" placeholder="Enter date" name="date" value={data.date} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>time</label>
                  <input type="text" placeholder="Enter time" name="time" value={data.time} onChange={(e) => handle(e)} required></input>
                </div>               
                <button>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Insert_event
