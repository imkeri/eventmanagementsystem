import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Title from '../Title/Title'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../pages/navbar/Navbar';
const Evetdetail = () => {
  const {id} = useParams()
  const _id = id;
  console.log("....",_id)
    const [evetdata,setEventData] = useState([]);

    const eventGetData=async(id)=>{
       try {
          const res = await axios.get(`http://localhost:4000/event/viewbyid/${_id}`)
          console.log(res.data.data);
          setEventData(res.data.data);
       } catch (error) {        
        console.log(error);
       }
    }
useEffect(()=>{
    eventGetData();
},[])


  return (
    <div>
    <Navbar />
      <Title 
        title={"Event Details"}
            p={"Event details is here"}
         />
         <section id="speakers-details">
      <div class="container">

        <div class="row">

          <div class="col-md-6">
            <img src="/assets/img/gallery/7.jpg" alt="Speaker 1" class="img-fluid"/>
          </div>

          <div class="col-md-6">
            <div class="details">
              <h2>{evetdata.e_name}</h2>
                <p class="caption-category">{evetdata.e_organizer}</p>
                <p class="caption-price"  style={{color:"#f82249"}}>Tickets from {evetdata.price}</p>
                <p class="caption-price" >{evetdata.e_venue}</p>
                <p class="caption-category">{evetdata.date} {evetdata.time}</p>
              <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
              <div class="social">
              <a href=""><TwitterIcon /></a>
                  <a href=""><FacebookIcon /></a>
                  <a href=""><InstagramIcon /></a>
                  <a href=""><LinkedInIcon/></a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>

         <Footer />
    </div>
  )
}

export default Evetdetail
