import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
import './css/inserevent.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './css/inserevent.css'
import { baseurl } from '../Baseurl';


const Update_event = () => {
    const params = useParams();
    console.log("hello.............user",params.id)
    const [data, setData] = useState([{
        e_name:"",
        e_venue:"",
        e_organizer:"",
        price:"",
        date:"",
        time:"",
    }]);

      const getData = async() => {
        axios.get(`${baseurl}/event/viewbyid/${params.id}`).then((res) => {
            console.log("456789",res.data.data)
            setData(res.data.data)
            
          }).catch((err) => {
            console.log(err);
          })
      }  
    useEffect(()=>{
        getData();
    },[])
      function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
      }
   
      function updateproduct(e){
        e.preventDefault();
        // console.log("----------");
            fetch(`${baseurl}/event/update/${params.id}`,{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-type':"application/json"
            },
            body:JSON.stringify(data)
        }).then((rst)=>{
            rst.json().then((resp)=>{
                console.log(rst);
                window.location = "/events"
            })
        })
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
            <h1>update User</h1>
          </div>
          <div className='bottom'>
            <div className='right'>
            <form className='new_event_form'>
                <div className='formInput'>
                  <label>e_name</label>
                  <input type="text" placeholder="Enter e_name" name="e_name" value={data.e_name} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>e_venue</label>
                  <input type="text" placeholder="Enter e_venue" name="e_venue" value={data.e_venue} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>e_organizer</label>
                  <input type="text" placeholder="Enter e_organizer " name="e_organizer" value={data.e_organizer} onChange={(e) => handle(e)} required></input>
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
                <button onClick={(e) => updateproduct(e)}>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Update_event
