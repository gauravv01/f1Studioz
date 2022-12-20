import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormActions } from '../../redux/FormDataSlice';
import CouponImg from '../../Data/Images/3702756.png'
import FavImg from '../../Data/Images/Path.png'
import EditImg from '../../Data/Images/Shape.png'
import CopyImg from '../../Data/Images/copy-paste.png'
import DeleteImg from '../../Data/Images/delete.png'
import AddMoreImg from '../../Data/Images/add-more.png'
import './FinalStep.css';

function FinalStep() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const data=useSelector(state=>state.ColectFormDataSlice.dataArray);
    const currentForm=data[data.length-1];

const editItem=()=>{
    dispatch(FormActions.EditForm());
}

const deleteItem=()=>{
    dispatch(FormActions.DeleteItem(currentForm.id));
navigate('/');
}
const AddMore=()=>{
    navigate('/Config');
}
  return (
    <div className='outer-div'>
        <div className='inner-div'>
            <div className='text'>
                <div className='bold-div'>
                    COMPLETE DOOR INTELLICORE OBSCURE,5TH GENERATION FINISH WALDER DOOR
                </div>
                <div className='desc-div'>
                    <p>Job Name: {currentForm.Assembly_type} <span>Change</span></p>
                    <p>Product #CWD . {currentForm.Framing}</p>
                    <p>Availability : IN STOCK (Available for Pickup)</p>
                </div>
            </div>
            <div className='pricing'>
                <div className='qty'>
                    <span >-</span>
                    <span >{currentForm.id}</span>
                    <span>+</span>
                </div>
                <div className='coupon-applied'>
                    Standard multiplier: 432
                    Secondry Multipliers Applied
                </div>
                <div className='price-mention'>
                  <p>  Net Price: <span>$4500.00</span></p>
                   <p> Unit Price: $4800</p>
                </div>
            </div>
            <div className='coupon'>
                <div className='coupon-apply'><img src={CouponImg} alt='coupon'/>Apply MPQ</div>
                <div className='view-details'>View Price Details</div>
            </div>
        <div className='but'>
         <Button variant='outline-secondary'><img src={FavImg} alt='FavImg'/>FAVORITES</Button>
         <Button variant='outline-secondary' onClick={editItem}><img src={EditImg} alt='EditImg'/>EDIT</Button>
         <Button variant='outline-secondary'><img src={CopyImg} alt='CopyImg'/>COPY</Button>
         <Button variant='outline-secondary' onClick={deleteItem}><img src={DeleteImg} alt='DeleteImg'/>DELETE</Button>
         </div>
        </div>
        <div className='address-div'>
            <div className='delivery-order'>
                <div className='delivery-date'>
                    <p>Change Delivery Date</p>
                    <input placeholder='Example: 31-DEC-1999' disabled/>
                    <p>Standard Delivery: Tue May 28 2019</p>
                </div>
                <div className='delivery-date'>
                <p>Purchase Order Number</p>
                    <input placeholder='Enter PO Number' disabled/>
                    <p>This PO will be useful to track this order items</p>
                </div>
            </div>
            <div className='billing-summary'>
                <div>
                <p> Bill Summary</p>
                <div className='bill-lines'>
                    <p>Sub Total</p>
                    <p>$ 4500.00</p>
                </div>
                <div className='bill-lines'>
                <p>Energy Surcharge</p>
                    <p>$ 70.18</p>
                </div>
                <div className='bill-lines'>
                <p>Sales Tax</p>
                    <p>$ 490.93</p>
                </div>
                <div className='bill-lines'>
                <p><b>TOTAL</b></p>
                    <p><b>$5061.11</b></p>
                </div>
                </div>
                <div className='line'></div>
                <div className='apply-tax'>
                    <div>
<input type='checkbox' id='apply-tax'/>
<label htmlFor='apply-tax'>Apply Tax</label>
                    </div>
                    <p>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>
                </div>
            </div>
        </div>
        <div className='billing-div'>
            <div className='billing-shipping'>
                <div className='billing-to'>Billing to</div>
                <div className='billing-text'>
                    <div className='billing-bold-text'>
                        <p className='billing-bold-text-p'>Bement Jared</p>
                        <p className='billing-bold-text-p2'>144 Curt Shores, 50 ,Madison Avenue Hixson ,42040</p>
                    </div>
                    <p className='change-button'>Change</p>
                </div>
                <div className='billing-contact'>
                    Contact: (123) 456 7890
                </div>
            </div>
            <div className='horizontal-line'></div>
            <div className='billing-shipping'>
            <div className='billing-to'>Shipping to</div>
                <div className='billing-text'>
                    <div className='billing-bold-text'>
                        <p className='billing-bold-text-p'>Bement Jared</p>
                        <p className='billing-bold-text-p2'>144 Curt Shores, 50 ,Madison Avenue Hixson ,42040</p>
                    </div>
                    <p className='change-button'>Change</p>
                </div>
                <div className='billing-contact'>
                    Contact: (123) 456 7890
                </div>
            </div>
        </div>
        <div className='place-order'>
            <div className='item-with-price'>
                <p>1 ITEM</p>
                <p className='place-order-price'>$5061.11</p>
            </div>
            <div className='addmore-placeorder-buttons'>
                <Button variant='secondry' style={{border: '1px solid rgba(102, 51, 43, 1)' , color: 'rgba(102, 51, 43, 1)' , marginRight:'1rem'}} onClick={AddMore}><img src={AddMoreImg} alt='Add more'/>ADD MORE</Button>
                <Button variant='primary' style={{backgroundColor: 'rgba(102, 51, 43, 1)'}}>PLACE ORDER</Button>
            </div>
        </div>
        
    </div>
  )
}

export default FinalStep




