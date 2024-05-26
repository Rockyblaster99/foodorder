import React, {useState} from 'react'
import {useSelector} from "react-redux";
import CommonSection from "../components/common-section/Common-Section";
import Helmet from "../components/helmet/Helmet";

import './Checkout.css'




const Checkout = () => {
    const cartTotalAmount = useSelector((state)=> state.cart.totalAmount)
    const shippingCost = 30;

    const totalAmounts = cartTotalAmount + Number(shippingCost)




    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterNumber, setEnterNumber] = useState('')
    const [enterCountry, setEnterCountry] = useState('')
    const [enterCity, setEnterCity] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        const userShippingAddress ={
            name:enterName,
            email:enterEmail,
            phone:enterNumber,
            city:enterCity,
            country:enterCountry,
            postalCode:postalCode
        };
        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo)

    }

    const shippingInfo = [];


    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout Bills'/>
            <div className='container'>
                <div className='row-checkout-1'>
                    <div className='col-checkout-1-1'>
                        <h6>Shipping Address</h6>
                        <form className='checkout__form' onClick={submitHandler}>
                            <div className='form__group'>
                                <input type='text' placeholder='Enter Your Name'
                                       required onChange={(e) => setEnterName(e.target.value)}
                                />
                            </div>


                            <div className='form__group'>
                                <input type='email' placeholder='Enter Your Email'
                                       required onChange={(e) => setEnterEmail(e.target.value)}
                                />
                            </div>

                            <div className='form__group'>
                                <input type='number' placeholder='Enter Your Phone Number'
                                       required onChange={(e) => setEnterNumber(e.target.value)}
                                />
                            </div>

                            <div className='form__group'>
                                <input type='text' placeholder='Country'
                                       required onChange={(e) => setEnterCountry(e.target.value)}
                                />
                            </div>

                            <div className='form__group'>
                                <input type='text' placeholder='City'
                                       required onChange={(e) => setEnterCity(e.target.value)}
                                />
                            </div>

                            <div className='form__group'>
                                <input type='number' placeholder='Postal Code'
                                       required onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>

                            <button type='submit' className='addTOCart'>
                                Payment
                            </button>
                        </form>


                    </div>

                    <div className='col-checkout-1-2'>
                        <div className='checkout__bill'>
                            <h6 className='first-h6'>Subtotal: <span>Rs-{cartTotalAmount}/-</span></h6>
                            <h6>Shipping Cost: <span>Rs-{shippingCost}/-</span></h6>
                            <div className='checkout__total'>
                                <h5>
                                    Total: <span>Rs-{totalAmounts}/-</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}
export default Checkout
