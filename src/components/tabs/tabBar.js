import React from 'react';
import Nav from 'react-bootstrap/Nav';
import constants from '../../Data/Constants/Constants';
import './tabBar.css';

function TabBar({onClick}) {

    return (
        // <Navbar bg="dark" variant="dark">
        <div style={{ backgroundColor: '#34495E', display: 'flex', flexDirection: 'row', justifyContent: 'center',height:'2rem',alignItems:'center'}}>
            <Nav onClick={onClick} >
                <Nav.Item>
                    <p className='cart' style={{ color: '#fff', fontWeight: 'bold' , marginRight:'1rem' }}>{constants.CART}</p>
                </Nav.Item>
                <Nav.Item>
                    <p className='favorites' style={{ color: '#fff' }}>{constants.FAVORITES}</p>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default TabBar