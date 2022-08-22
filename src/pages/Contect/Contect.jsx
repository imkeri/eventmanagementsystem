import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import './contect.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Title from '../../components/Title/Title'
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { baseurl } from '../../Baseurl';
const Contect = () => {

    const [data, setdata] = useState({
        name: "",
        email: "",
        sub: "",
        message: ""
    });

    function insert(e) {
        console.log("DAtA", data)
        e.preventDefault();
        axios.post(`${baseurl}/contact/insertcontect`, data)
            .then(res => {
                console.log(res)
                window.location = "/contect"
            }).catch((error) => {
                console.log(error)
            })
    }

    function handle(e) {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    return (
        <>
            <Navbar />
            <Title
                title={"Contect us"}
                p={"Nihil officia ut sint molestiae tenetur."}
            />
            <section id="contact" class="section-bg">

                <div class="container" data-aos="fade-up">

                    <div class="row contact-info">

                        <div class="col-md-4">
                            <div class="contact-address">
                                <LocationOnOutlinedIcon className='conicon' />
                                <h3>Address</h3>
                                <address>A108 Adam Street, NY 535022, USA</address>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-phone">
                                <PhoneIphoneOutlinedIcon className='conicon' />
                                <h3>Phone Number</h3>
                                <p><a href="tel:+155895548855" style={{ textDecoretion: "none" }}>+91 5589 55488 55</a></p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-email">
                                <EmailOutlinedIcon className='conicon' />
                                <h3>Email</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>

                    </div>

                    <div class="form">
                        <form action="" method="post" onSubmit={(e) => insert(e)} className="email-form">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required onChange={(e) => handle(e)} />
                                </div>
                                <div class="form-group col-md-6 mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => handle(e)} />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control" name="sub" id="subject" placeholder="Subject" required onChange={(e) => handle(e)} />
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Message" required onChange={(e) => handle(e)}></textarea>
                            </div><br></br>

                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contect
