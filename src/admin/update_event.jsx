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

  const [data, setData] = useState([{
    e_name: "",
    e_venue: "",
    e_organizer: "",
    price: "",
    date: "",
    time: "",
  }]);

  const getData = async () => {
    axios.get(`${baseurl}/event/viewbyid/${params.id}`).then((res) => {
      console.log("456789", res.data.data)
      setData(res.data.data)

    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getData();
  }, [])
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.name] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function updateproduct(e) {
    e.preventDefault();
    fetch(`${baseurl}/event/update/${params.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    }).then((rst) => {
      rst.json().then((resp) => {
        console.log(rst);
        window.location = "/events"
      })
    })
  }
  const navigate = useNavigate()
  function logout(e) {
    alert("are you sure?")
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <div className='new'>
        <div className="sidebar">
          <Sidebar />
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
                  <label>Name</label>
                  <input type="text" placeholder="Enter e_name" name="e_name" value={data.e_name} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>Venue</label>
                  <input type="text" placeholder="Enter e_venue" name="e_venue" value={data.e_venue} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>Organizer</label>
                  <input type="text" placeholder="Enter e_organizer " name="e_organizer" value={data.e_organizer} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>Price</label>
                  <input type="text" placeholder="Enter price" name="price" value={data.price} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>Date</label>
                  <input type="date" placeholder="Enter date" name="date" value={data.date} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='formInput'>
                  <label>Time</label>
                  <input type="text" placeholder="Enter time" name="time" value={data.time} onChange={(e) => handle(e)} required></input>
                </div>
                <div className='d-flex justify-content-end'>
                  <button onClick={(e) => updateproduct(e)}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Update_event
