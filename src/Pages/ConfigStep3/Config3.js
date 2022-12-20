import React from 'react'
import NavBar from '../../components/nav/navBar';
import GrayBand from '../../components/grayBand/grayBand';
import Details from '../../components/NewDoorSectionalDetails/Details';
import FinalStep from '../../components/FinalStep/FinalStep';
import { useSelector } from 'react-redux';


function Config3() {
const data=useSelector(state=>state.ColectFormDataSlice.formFilled);
const formPage=<div><GrayBand data='Create a new door' placeholder='2 of 3' page='/Config2'/>
<Details/></div>
const lastPage=<div><GrayBand   data='Classic_John45012' placeholder='Cart #12346723'/>
<FinalStep/></div>

  return (
    <div>
      <NavBar/>
     {!data ? formPage : lastPage }
    </div>
  )
}

export default Config3
