import React from 'react';
import constants from '../../Data/Constants/Constants';
import './Filterbar.css';


function Filterbar({onClick}) {


  return (
    <div style={{display:'flex',flexDirection:'row',backgroundColor:'#E5E5E5' , height:'3rem',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(219,219,220,1)'}}>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'2rem'}}>
        <p style={{color:' rgba(52, 73, 94, 1)' ,marginRight:'2rem'}} onClick={onClick}>{constants.ACTIVE_CARTS}</p>
      <p style={{color:'rgba(136, 148, 160, 1)'}}>{constants.ARCHIVED_CARTS}</p>
        </div>
     
    </div>
  )
}

export default Filterbar
