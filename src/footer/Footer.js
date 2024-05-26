import React from 'react'
import logo from "../images/res-logo.png";
import './Footer.css'
import { IoIosSend } from "react-icons/io";
import {Link} from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer'>
        <div className='container'>
            <div className='row'>

                <div className='col'>
                    <div className='logo footer__logo'>
                        <img src={logo} alt='logo-img'/>
                        <h5>Tasty Treat</h5>
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                        </p>
                    </div>
                </div>

                <div className='col '>

                    <h4 className='footer__title'>Delivery Time</h4>
                    <ul className='time'>
                        <li className='delivery__time-item'>
                            <span>Sunday - Thursday</span>
                            <p>10:00am - 11:00pm</p>
                        </li>

                        <li className='delivery__time-item'>
                            <span>Friday - Saturday</span>
                            <p>Off day</p>
                        </li>

                    </ul>

                </div>

                <div className='col'>
                    <h4 className='footer__title'>Contact</h4>
                    <ul className='time'>
                        <li className='delivery__time-item'>
                            <p>Location: Chennai, TamilNadu,INDIA</p>

                        </li>

                        <li className='delivery__time-item'>
                            <span>Phone: +918877665544</span>

                        </li>

                        <li className='delivery__time-item'>
                            <span>Email: example@gmail.com</span>

                        </li>

                    </ul>

                </div>

                <div className='col'>
                    <h4 className='footer__title'>NewsLetter</h4>
                    <p>Subscribe our newsletter</p>
                    <div className='newsletter'>
                        <input type='email' placeholder='Enter your email'/>
                        <span>
                            <IoIosSend className='send__icon'/>
                        </span>
                    </div>
                </div>

            </div>

            <div className='row-1'>
                <div className='col'>
                    <p className='copyright'>Copyright - 2024, website made by unknown developer.
                    All rights RReserved.
                    </p>
                </div>
                <div className='col'>
                    <div className='social__links'>
                        <p className='small__p'>Follow: </p>
                        <span>
                            <Link to='https://www.facebook.com/'>
                                <FaFacebookF className='social__icons'/>
                            </Link>
                        </span>

                        <span>
                            <Link to='https://www.facebook.com/'>
                                <FaFacebookF className='social__icons'/>
                            </Link>
                        </span>

                        <span>
                            <Link to='https://www.facebook.com/'>
                                <FaFacebookF className='social__icons'/>
                            </Link>
                        </span>



                    </div>

                </div>

            </div>

        </div>
        </footer>
    )
}
export default Footer
