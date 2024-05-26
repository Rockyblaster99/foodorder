import React from 'react'
import CartItem from "./CartItem";
import { IoClose } from "react-icons/io5";
import {Link} from "react-router-dom";
import './shopping-cart.css'
import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../store/shopping-cart/cartUISlice";


const Carts = () => {

    const dispatch = useDispatch()
    const toggleCart = ()=>{
        //.toggle come from cartUISlice toggle(state)
        dispatch(cartUIActions.toggle())
    }


    //useSelector
    const cartProducts = useSelector((state)=> state.cart.cartItems)


    const totalAmount = useSelector((state)=>
        state.cart.totalAmount
    )
    return (
        <div className='cart__container'>
            <div className='cart'>
                <div className='cart__close'>
                    <span onClick={toggleCart}>
                        <IoClose/>
                    </span>
                </div>

                <div className='cart__item-list'>

                    {
                        cartProducts.length === 0 ? <h6 className='no__items-list'>No items added to the cart</h6> :
                        cartProducts.map((item,index)=>(
                            <CartItem item={item} key={index}/>
                        ))
                    }



                </div>

                <div className='cart__bottom'>
                    <h6>Subtotal : <span>Rs-{totalAmount}/-</span></h6>
                    <button>
                        <Link to='/checkout'>Checkout</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Carts
