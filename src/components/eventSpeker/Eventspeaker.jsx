import React from 'react'
import './eventspeaker.css'
import Speaker from './Speaker'
import {testimonial} from '../Testimonial/testimonialdata'
import '../Testimonial/testimonial.css'
import { speaker } from './speakerdata';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../footer/Footer'
const Eventspeaker = () => {
  return (
    <>
    <div id="speakers">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Event Speakers</h2>
          <p>Here are some of our speakers</p>
          <br></br>
        </div>
         <div className='row'>
        { speaker.map((val, id) => {
                        return (
                            <Speaker
                                img={val.img}
                                speakername={val.speakername}
                                info={val.info}
                            />
                        )
                    })
        }
         </div>
        
      </div>

    </div>
       {/* <Footer /> */}

       <div className='container testimonial '>
        <div className='row'>
        
        { testimonial.map((val, id) => {
                        return (
                            <Testimonial
                                img={val.img}
                                name={val.name}
                                position={val.potision}
                            />
                        )
                    })
        }
        </div>
       </div>
       <br></br>
       <Footer />
    </>
  )
}

export default Eventspeaker
