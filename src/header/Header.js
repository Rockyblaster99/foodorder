import React, {useEffect, useRef} from 'react'
import logo from '../../src/images/res-logo.png'
import {NavLink, Link} from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import './Header.css'
import {cartUIActions} from "../store/shopping-cart/cartUISlice";
import {useSelector, useDispatch} from "react-redux";


const nav__links =[
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Foods',
        path:'/foods'
    },
    {
        display:'Cart',
        path:'/cart'
    },
    {
        display:'Contact',
        path:'/contact'
    },
]
const Header = () => {

    const menuRef = useRef(null)


    //stickyNavbar
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header__shrink')
            }
            else {
                headerRef.current.classList.remove('header__shrink')
            }
        })


    }, []);


    //
    const totalQuantity = useSelector((state)=> state.cart.totalQuantity)



    //cart__icon (basket)show when i click
    const dispatch = useDispatch();
    const toggleCart = ()=>{
        dispatch(cartUIActions.toggle())
    }







    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')


    //useSelector
    // const totalQuality = useSelector((state)=> state.cart.totalQuality)


    return (
        <header className='header' ref={headerRef} >
            <div className='container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <img src={logo} alt='logo-img'/>

                    </div>

                {/*    ----------------------*/}
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className='menu'>
                            {
                                nav__links.map((item,index)=>(
                                    // <NavLink to={item.path} key={index}>
                                    <NavLink onClick={toggleMenu} to={item.path} key={index}
                                    className={navClass => navClass.isActive ?
                                    'active__menu':''}>
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                {/*    ----------icon-----*/}
                    <div className='nav__right'>
                        <span className='cart__icon' onClick={toggleCart}>
                            <RiShoppingBasketLine className='cart-icon'/>
                            <span className='cart__badge'>{totalQuantity}</span>
                        </span>


                        <span className='user'>
                            <Link to='/login'>
                                <FaUser className='user-icon'/>
                            </Link>
                        </span>

                        <span className='mobile__menu' onClick={toggleMenu}>
                            <IoMenu className='menu-icon'/>
                        </span>
                    </div>

                </div>

            </div>
            
        </header>
    )
}
export default Header
