import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseurl } from '../../Baseurl';
import Navbar from '../../pages/navbar/Navbar';
import '../Registration/regitration.css'
import { validate } from './validation';

const Buy_ticket = () => {
  const [evetsName, setEventName] = useState([])
  const getdata = async () => {
    try {
      const res = await axios.get(`${baseurl}/event/viewall`)
      console.log(res.data.data);
      setEventName(res.data.data);
    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [])
  // ----------------insert
  const [msg, setmsg] = useState([])
  const [data, setdata] = useState({
    name: "",
    mobile: "",
    email: "",
    event: "",
    ticket: ""
  });

  function insert(e) {
    console.log("DAtA", data)
    e.preventDefault();
    axios.post(`${baseurl}/ticket/insert`, data)
      .then(res => {
        console.log(res)
        setmsg(res.data.message)
        setdata({
          name: "",
          mobile: "",
          email: "",
          event: "",
          ticket: ""
        })

      }).catch((error) => {
        console.log(error)
      })
  }

  function handle(e) {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  return (

    <div>
      <Navbar />
      <div id='main_box'>
        <div className="main2">
          <div className="box3">
            <h3 className='text-center'>Book Now</h3>
            <form method="" action="" onSubmit={(e) => insert(e)} name="booking">
              <input type="text" placeholder='Name' onChange={(e) => handle(e)} name="name" value={data.name} />
              <input type="text" placeholder='Mobile Number' onChange={(e) => handle(e)} name="mobile" value={data.mobile} />
              <input type="email" placeholder='Email' onChange={(e) => handle(e)} name="email" value={data.email} />
              <select name="event" id="evets" onChange={(e) => handle(e)} value={data.event}  >
                <option>--choose a evets</option>
                {
                  evetsName.map((val, id) => {
                    return (
                      <option value={val.e_name} key={id}>{val.e_name}</option>
                    )
                  })
                }
              </select>
              <br></br><br></br>
              <select name="ticket" id="ticket" onChange={(e) => handle(e)} value={data.ticket}>
                <option>--choose a ticket</option>
                <option value="ticket1">Ticket1</option>
                <option value="ticket2">ticket2</option>
                <option value="ticket3">Ticket3</option>
              </select><br /><br />
              <button type='submit' className="login_btn" onClick={validate}>book now</button>
              <h4 style={{ color: "white" }}>{msg}</h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy_ticket
