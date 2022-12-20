import React from 'react'
import Config from '../../components/configurtion/config'
import GrayBand from '../../components/grayBand/grayBand'
import NavBar from '../../components/nav/navBar'

function Config1() {
  return (
    <div>
      <NavBar/>
      <GrayBand data='Create new order' page='/'/>
      <Config page='/Config2'/>
    </div>
  )
}

export default Config1
