import React from 'react'
import './testimonial.css'
const Testimonial = (props) => {
	return (
		<div className="col-lg-4 col-md-6">

			<div className="testimonial-item">

				<div className="comment">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
				</div>
				<div className="person">
					<div className="media">

						<img src={props.img} alt="person-image" />
						<div className="media-body">

							<div className="name"><p>{props.name}</p></div>

							<div className="profession"><p>{props.position}</p></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
