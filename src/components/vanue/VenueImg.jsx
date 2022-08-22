import React from 'react'
import {venue} from './Venuedata';
import {Map,GoogleApiWrapper} from 'google-maps-react'
import Vimg from './Vimg';
const VenueImg = (props) => {
  return (
    <>
      <section id="venue">

<div class="container-fluid" data-aos="fade-up">
  <div class="row g-0">
  <div className='col-lg-6'>
  <div className='gmap'>
  <Map
          google={props.google}
          style={{width:"49%",height:"47%"}}
          zoom={10}
          initialCenter={
            {
              lat:21.170240,
              lng:72.831062
            }
          }>
  </Map>
  </div>
  </div>
    <div class="col-lg-6 text-center venue-info">
      <div class="row justify-content-center">
        <div class="col-11 col-lg-8 position-relative">
          <h3>Downtown Conference Center, New York</h3>
          <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay="100">
  <div class="row g-0">
  {
          venue.map((val)=>{
            console.log(val);
            return (
              <Vimg img={val.img}/>
            )
          })
         }
  </div>
</div>

</section>
    </>
  )
}



export default GoogleApiWrapper({
  apiKey:"AIzaSyBV1TXDA_7aXJT-kObUzUXW5G0HqhaM7WU"
})(VenueImg)