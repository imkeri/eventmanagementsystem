import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Title from '../../components/Title/Title'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import './ticket.css'
import { baseurl } from '../../Baseurl'


const Ticketdata = () => {
  const email = localStorage.getItem("email");
  console.log(email)


  const [ticketdata, setticketdata] = useState([]);
  const ticketGetData = async () => {
    console.log(email)
    const data = await axios.get(`${baseurl}/ticket/viewbyid/${email}`).then((res) => {
      console.log("......", res.data.data[0]);
      setticketdata(res.data.data[0]);

    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    ticketGetData();
  }, [])

  return (
    <div>
      <Navbar />
      <Title
        title={"User Profile"}
        p={"Nihil officia ut sint molestiae tenetur."}
      />
      <section id="speakers-details">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ticketdata">
              <img src="/assets/img/userlogo.png" alt="Speaker 1" class="img-fluid" />
            </div>
            <div class="col-md-6">
              <div class="details">
                <h2>{ticketdata.name}</h2>
                <p class="caption-category" style={{ color: "#f82249" }}>{ticketdata.event}</p>
                <p class="caption-mobile"  > {ticketdata.mobile}</p>
                <p class="caption-email" >{ticketdata.email}</p>
                <p class="caption-category" style={{ color: "#f82249" }}>{ticketdata.ticket}</p>
                <p>Et dolore blanditiis officiis non quod id possimusm alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default Ticketdata
