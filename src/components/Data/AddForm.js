import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../../Data/Constants/Constants';
import './AddForm.css';

function AddForm() {
  return (
      <Link to='/Config'>
      <div  className='div'>{constants.ADD_MORE}</div>
      </Link>
  )
}

export default AddForm
