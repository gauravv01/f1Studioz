import React from 'react'
import './style.css'
import backArrow from '../../Data/Images/back_arrow.png';
import dots from '../../Data/Images/three_dots.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GrayBand({data,placeholder,page}) {
    const lastPage=useSelector(state=>state.ColectFormDataSlice.formFilled);
    return (
        <div style={{ padding: '0.75rem', backgroundColor: '#34495E', maxHeight: '3rem', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#fff' }}>
                {!lastPage && <Link to={page}><img src={backArrow} alt='backarrow' /></Link>}
                <span style={{ marginLeft: '1rem' }}>{data}</span>
                <span style={{ marginLeft: '1rem' , color: '#8894A0'} }>{placeholder}</span>

            </div>
            <div style={{ color: '#fff', marginRight: '1.25rem' }}>
                <img src={dots} alt='dots' />
            </div>
        </div>
    )
}

export default GrayBand