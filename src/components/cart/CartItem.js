 import React from 'react'
import productImg from '../../images/product_01.1.jpg'
import { IoClose } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import './cart-item.css'
 import {useDispatch} from "react-redux";
import {cartActions} from "../../store/shopping-cart/CartSlice";

 const CartItem = ({item}) => {
    const {id,title,price,image01,quantity,totalPrice} = item;


    const dispatch = useDispatch();
    const incrementItem = ()=>{

        dispatch(cartActions.addItem(
            {
                id,
                title,
                price,
                image01,

            }
        ))
    }

    const decrementItem = ()=>{
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = ()=>{
        dispatch(cartActions.deleteItem(id))
    }


    return (
        <div className='cart__item'>
          <div className='cart__item-info'>
              {/*product replace to image01*/}
              <img src={image01} alt='ppp-1'/>

            <div className='cart__product-info'>
                <div className='info-h6-p'>
                    <h6>{title}</h6>
                    <p>{quantity}x <span>Rs-{totalPrice}/-</span></p>
                    <div className='increase__decrease-btn'>
                        <span className='increase__btn' onClick={incrementItem}>
                            <MdOutlineAdd/>
                        </span>
                        <span className='quantity'>{quantity}</span>
                        <span className='decrease__btn' onClick={decrementItem}>
                            <RiSubtractLine/>
                        </span>
                    </div>
                </div>

                <span className='delete__btn' onClick={deleteItem} >
                    <IoClose/>
                </span>
            </div>
          </div>
        </div>
    )
}
export default CartItem
