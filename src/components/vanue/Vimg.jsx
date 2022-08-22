import React from 'react'

const Vimg = (props) => {
  return (
    <>
      <div class="col-lg-3 col-md-4">
      <div class="venue-gallery">
          <img src={props.img} alt="" class="img-fluid"/>
      </div>
    </div>
    </>
  )
}

export default Vimg
