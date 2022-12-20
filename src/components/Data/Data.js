import React from 'react';
import AddForm from './AddForm';
import constants from '../../Data/Constants/Constants';
import './Data.css';

function Data() {
  return (
    <div style={{fontWeight:'bold ' , padding:'auto'}}>
      <p className='p'>{constants.NO_DATA}</p>
      <AddForm/>
     
    </div>
  )
}

export default Data
