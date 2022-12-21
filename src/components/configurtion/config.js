import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import icn from './Icons/rightArrow.png';
import constants from '../../Data/Constants/Constants';
import './style.css';

function Config({page}) {

    return (

        constants.DATA.map((itm) => {
            return <div key={itm.title} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Card className='crd'>
                    <Card.Body>
                    <Link to={itm.title==='Configure your door from scratch'?page:null} style={{textDecoration:'none'}}>  
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginTop: '0.3rem' }}>
                                <b className='titles'>{itm.title}</b>
                                <p style={{ color: '#8894A0' }}>{itm.desc}</p>
                            </div>
                        
                              <div style={{ marginTop: '1rem' }}>
                                <img src={icn} alt='icn' />
                            </div>
                            

                        </div>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

        })
    )
}

export default Config