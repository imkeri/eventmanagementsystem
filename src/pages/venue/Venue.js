import Footer from '../../components/footer/Footer'
import Title from '../../components/Title/Title'
import Events from '../../components/vanue/Events'
import VenueImg from '../../components/vanue/VenueImg'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../navbar/Navbar'
import { baseurl } from '../../Baseurl'
const Venue = () => {
  const [evetsData, setEventData] = useState([]);

  const eventGetData = async () => {
    try {
      const res = await axios.get(`${baseurl}/event/viewall`)
      console.log(res.data.data);
      setEventData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    eventGetData();
  }, [])
  return (
    <div>
      <Navbar />
      <Title
        title={"Event Venue"}
        p={"Event venue location info and gallery"}
      />
      <div className='container'>
        <div className='row py-5'><br></br>
          {
            evetsData.map((val) => {
              return (<>
                <Events
                  id={val._id}
                  ti tle={val.e_name}
                  category={val.date}
                  price={val.price}
                  text={val.time}
                /><br></br>
              </>
              )
            })
          }

        </div>
      </div>
      <VenueImg />
      <Footer />
    </div>
  )
}
export default Venue
