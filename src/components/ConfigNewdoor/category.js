import React from 'react'
import Form from 'react-bootstrap/Form';
import constants from '../../Data/Constants/Constants';

function Category() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem', marginLeft: '30%', width: '100%' }}>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Select Category</p>
                <Form.Select aria-label="Default select example">
                    <option>{constants.RESIDENTIAL_DOOR}</option>
                    <option value="1">{constants.ONE}</option>
                    <option value="2">{constants.TWO}</option>
                    <option value="3">{constants.THREE}</option>
                </Form.Select>
            </div>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Select Series</p>
                <Form.Select aria-label="Default select example">
                    <option>{constants.CANYON}</option>
                    <option value="1">{constants.ONE}</option>
                    <option value="2">{constants.TWO}</option>
                    <option value="3">{constants.THREE}</option>
                </Form.Select>
            </div>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Door Type</p>
                <Form.Select aria-label="Default select example">
                    <option>{constants.CAN212}</option>
                    <option value="1">{constants.ONE}</option>
                    <option value="2">{constants.TWO}</option>
                    <option value="3">{constants.THREE}</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default Category