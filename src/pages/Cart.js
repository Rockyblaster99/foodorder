import React from 'react'
import CommonSection from "../components/common-section/Common-Section";
import Helmet from "../components/helmet/Helmet";
import {useDispatch, useSelector} from "react-redux";
import './Cart.css'
import { FaTrashAlt } from "react-icons/fa";
import {cartActions} from "../store/shopping-cart/CartSlice";
import {Link} from "react-router-dom";


const Cart = () => {

    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalAmount = useSelector((state)=> state.cart.totalAmount)

    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart'/>
            <section>
                <div className='container'>
                    <div className='row-cart-1'>
                        <div className='col-cart-1-1'>
                            {/*<table className='table'>*/}
                            {/*    <thead>*/}
                            {/*    <tr className='table__tr'>*/}
                            {/*        <th>Image</th>*/}
                            {/*        <th>Product Title</th>*/}
                            {/*        <th>Price</th>*/}
                            {/*        <th>Quantity</th>*/}
                            {/*        <th>Delete</th>*/}
                            {/*    </tr>*/}
                            {/*    </thead>*/}
                            {/*    <tbody className='tbody'>*/}
                            {/*    <Tr />*/}
                            {/*    </tbody>*/}
                            {/*</table>*/}

                            {
                                cartItems.length === 0 ? (<h5 className='empty__cart'>No cart Items is added</h5>) :
                                    (<table className='table'>
                                        <thead>
                                        <tr className='table__tr'>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody className='tbody'>

                                        {
                                            cartItems.map((item)=>( <Tr item={item} key={item.id}/>
                                            ))
                                        }


                                        </tbody>
                                    </table>
                                    )
                            }

                            <div className='below__details'>
                                <h6>Subtotal: <span>Rs-{totalAmount}/-</span></h6>
                                <p>taxes and shipping will calculate at checkout</p>
                                <div>
                                    <button className='addTOCart mmme'>
                                        <Link to='/foods'>Add Order</Link>
                                    </button>

                                    <button className='addTOCart '>
                                        <Link to='/checkout'>Checkout</Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}


const Tr = (props) => {
    //cartActions
    const dispatch = useDispatch();
    const deleteItem = ()=>{
        dispatch(cartActions.deleteItem(id))
    }
    const {id,image01, title, price, quantity} = props.item;


    return <tr>
        <td className='cart__img-box'><img src={image01} alt='adcad'/></td>
        <td>{title}</td>
        <td>{price}</td>
        <td >{quantity }</td>
        <td><FaTrashAlt className='cart__item-del' onClick={deleteItem}/></td>
    </tr>
}


export default Cart



