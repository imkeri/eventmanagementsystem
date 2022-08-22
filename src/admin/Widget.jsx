import React from 'react'
import './css/widget.css'
import { Link } from 'react-router-dom';

const Widget = (props) => {
  return (
  <>
    <div className='widget'>
       <div className='left'>
       <h1 className='title1'>{props.title}</h1>
       <span className='counter'>{props.count}</span>
       
       </div>
       <div className='right'>
       <div className='icon'>
       {props.icon}
       </div>
       <Link to={`/${props.view}`} className='link1' >See all</Link>
       </div>
    
    </div>
   </>
  )
}

export default Widget