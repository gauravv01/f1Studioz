import React from 'react';
import Nav from 'react-bootstrap/Nav';
import constants from '../../Data/Constants/Constants';
import './tabBar.css';

function TabBar({onClick}) {

    return (
        <div className='navbar' >
            <Nav onClick={onClick} >
                <Nav.Item>
                    <p className='cart' >{constants.CART}</p>
                </Nav.Item>
                <Nav.Item>
                    <p className='favorites' >{constants.FAVORITES}</p>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default TabBar