import React from 'react'
import {Link} from "react-router-dom";
import './ProducrCard.css'
import {useDispatch} from "react-redux";
import { cartActions} from "../../store/shopping-cart/CartSlice";


const ProductCard = (props) => {
    const {id,title,price,image01} = props.item

    //getting from cartSlice it shows how many carts has u added 1,2,3,....
    const dispatch = useDispatch()
    const addToCart = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    return (
        <div className='row-pc-1'>


        <div className='product__item'>
            <div className='product__img'>
                <img src={image01} alt='p-1'/>
            </div>

            <div className='product__content'>
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
                <div className='order__product'>
                    <span className='product__price'>Rs-{price}-/</span>
                    <button className='addTOCart' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ProductCard
