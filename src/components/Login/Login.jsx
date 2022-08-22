import axios from 'axios'
import { validate } from './validation'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import { baseurl } from '../../Baseurl'
const Login = () => {


  const [data, setdata] = useState({
    email: "",
    password: ""
  });
  function submit(e) {
    e.preventDefault();
    axios.post(`${baseurl}/ragistration/login`, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);


        if (res.data.token) {
          if (res.data.email === "admin@gmail.com") {
            window.location = "/dashborad"
          }
          else {
            window.location = '/home'
          }

        }
      })
      .catch((err) => {
        console.log("Error:", err);
        alert(err.response.data.message)
      }
      )
  }
  function handle(e) {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  return (
    <div>
      <div id='main_box'>
        <div className="main2">
          <div className="box2">
            <h3>Login To Your Account</h3>
            <form method="" action="" name='login' onSubmit={(e) => submit(e)}>
              <input type="text" placeholder='Email' onChange={(e) => handle(e)} name="email" value={data.email} />
              <input type="password" placeholder='password' onChange={(e) => handle(e)} name="password" value={data.password} />
              <div className='checkbox'>
                <input type="checkbox" className='chk' style={{ height: "15px", width: "30px" }}></input><p>Agree with Terms & condition</p>
              </div>
              <button type='submit' className="login_btn" onClick={validate}> Login</button><br></br>
              <Link to="/ragistration" style={{ "color": "#f82249", "fontSize": "14px", "textAlign": "center" }} className="text-center">Create a new account ?</Link>

            </form>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Login
