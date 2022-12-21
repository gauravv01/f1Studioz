import React from 'react';
import constants from '../../Data/Constants/Constants';
import './Filterbar.css';


function Filterbar({onClick}) {


  return (
    <div className='filterbar-main' >
        <div className='filterbar-lines' >
        <p className='active-cart'  onClick={onClick}>{constants.ACTIVE_CARTS}</p>
      <p className='favorite-cart' >{constants.ARCHIVED_CARTS}</p>
        </div>
     
    </div>
  )
}

export default Filterbar
