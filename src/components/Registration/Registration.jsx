import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {validate} from './validataion'
import './regitration.css'
import { baseurl } from '../../Baseurl';
const Registration = () => {
 const [msg,setmsg] = useState([])
    const [data,setdata] = useState({
        f_name:"",
        l_name:"",
        mobile_number: "",
        email:"",
        password: "" 
      });

      function insert(e){
        console.log("DAtA",data)
        e.preventDefault();
        axios.post(`${baseurl}/ragistration/insertragistration`,data)
        .then(res=>{
          console.log(res)
          setmsg(res.data.message)
          window.location="/"
        
        }).catch((error)=>{
          console.log(error)
        })
      }

function handle(e){
const {name,value}=e.target
setdata({...data, [name]:value})
}

  return (
<div>
    <div id='main_box'>
        <div className="main2">
            <div className="box3">
                <h3 className='text-center'>Registration</h3>
                <form method="" action="" name='ragistration' onSubmit={(e)=>insert(e)}>
                    <input type="text" placeholder='First Name' onChange={(e)=>handle(e)} name="f_name" value={data.f_name}/>
                    <input type="text" placeholder='Last Name' onChange={(e)=>handle(e)} name="l_name" value={data.l_name}/>
                    <input type="text" placeholder='Mobile Number' onChange={(e)=>handle(e)} name="mobile_number" value={data.mobile_number}/>
                    <input type="email" placeholder='Email' onChange={(e)=>handle(e)} name="email" value={data.email}/>
                    <input type="password" placeholder='password' onChange={(e)=>handle(e)} name="password" value={data.password}/>
                    <input type="password" placeholder='confirm password ' onChange={(e)=>handle(e)} name="confirm_password" value={data.confirm_password}/>
                   
                    <button type='submit' className="login_btn" onClick={validate }> Register</button>
                    <br></br>
                   <spna style={{"fontSize":"14px"}}> have you already account?</spna> <Link to="/" style={{"color":"#f82249","fontSize":"14px"}} className="text-center">Login here</Link>
                  
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Registration
