import React from 'react'
import './title.css'
const title = (props) => {
  return (
    
<div class="page-title bg-title overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<div class="title">
					<div class="section-header">
					<h3>{props.title}</h3>
					<p>{props.p}</p>
        b       </div>
				</div>
				
			</div>
		</div>
	</div>
</div>

  )
}

export default title
