import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/ConfigNewdoor/category'
import GrayBand from '../../components/grayBand/grayBand'
import NavBar from '../../components/nav/navBar';
import { Button } from 'react-bootstrap';


function Config2() {
  return (
    <div>
      <NavBar/>
      <GrayBand data='Create a new door' placeholder='1 of 3' page='/Config'/>
      <Category/>
      <Link to='/Config3' style={{display:'flex',flexDirection:'row',justifyCenter:'center',textDecoration:'none'}}>
        <Button variant='success'  style={{backgroundColor:'rgba(102,51,43,1)',margin:'3rem auto'}}>CONFIGURE</Button>
        </Link>
    </div>
  )
}

export default Config2
