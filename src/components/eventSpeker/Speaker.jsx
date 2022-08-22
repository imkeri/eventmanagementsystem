import React from 'react'
import './eventspeaker.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Speaker = (props) => {
  return (
   
        <div className="col-lg-4 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay="100">
              <img src={props.img} alt="Speaker 1" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">{props.speakername}</a></h3>
                <p>{props.info}</p>
                <div className="social">
                  <a href=""><TwitterIcon /></a>
                  <a href=""><FacebookIcon /></a>
                  <a href=""><InstagramIcon /></a>
                  <a href=""><LinkedInIcon/></a>
                </div>
              </div>
            </div>
      </div>
     
    
  )
}

export default Speaker
