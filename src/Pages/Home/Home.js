import React from 'react'
import Data from '../../components/Data/Data'
import FormData from '../../components/Data/FormData'
import NavBar from '../../components/nav/navBar'
import Filterbar from '../../components/tabs/Filterbar'
import TabBar from '../../components/tabs/tabBar';
import { useSelector,useDispatch } from 'react-redux';
import { FormActions } from '../../redux/FormDataSlice'

function Home() {
  const dispatch=useDispatch();
const check=useSelector(state=>state.ColectFormDataSlice.Changed);

const open=()=>{
  dispatch(FormActions.OpenCart()); 
}
const close=()=>{
  dispatch(FormActions.CloseCart());
}
  return (
    <div>
      <NavBar/>
      <TabBar onClick={open}/>
      <Filterbar onClick={close}/>
  {check ? <Data/> : <FormData /> }
    </div>
  )
}

export default Home
