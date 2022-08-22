import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import "./style.css"
const Events = (props) => {
   
 
    return (
        <div class="col-lg-6 venue_info py-3">
            <div class="thumbnail no-border no-padding">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="media_img">
                            <img src="../../assets/img/gallery/5.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-12">
                        <div class="caption">
                            <h3 class="caption-title">{props.title}</h3>
                            <p class="caption-category"><i class="fa fa-file-text-o"></i>{props.category}</p>
                            <p class="caption-price">Tickets from {props.price}</p>
                            <p class="caption-text">{props.text}</p>
                            <Link to={`detail/${props.id}`} class="but_tickes scrollto" style={{"margin":"10px -5px 0px 0px"}}>About Event</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
