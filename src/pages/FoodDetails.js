import React, {useEffect, useState} from 'react'
import './FoodDetails.css'



import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";



import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";
import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import {useParams} from "react-router-dom";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/common-section/Common-Section";
// import productImg from '../images/product_01.1.jpg'

import ProductCard from "../components/product-card/ProductCard";
import {useDispatch} from "react-redux";
import {cartActions} from "../store/shopping-cart/CartSlice";

const FoodDetails = () => {

    const [tab, setTab] = useState('desc')

    const {id} = useParams();

    const product = products.find((product) => product.id === id)

    const [previewImg, setPreviewImg] = useState(product.image01)

    const {title,price,category,desc,image01} = product

    //after the image
    const relatedProduct = products.filter((item)=> category === item.category )

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product]);


    useEffect(() => {
        window.scrollTo(0,0)
    }, [product]);


    //useDispatch
    const dispatch = useDispatch();
    const adItem = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }


    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [reviewMsg, setReviewMsg] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(enteredName,enteredEmail,reviewMsg)

    }

    return (
        <Helmet title='Product-details'>
            <CommonSection title={title}/>
            <section>
                <div className='container'>
                    <div className='row-fd-1'>

                        <div className='col-fd-1-1'>
                            <div className='product__images'>
                                <div className='img__item' onClick={()=> setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt='hg'/>
                                </div>
                                <div className='img__item' onClick={()=> setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt='hg'/>
                                </div>
                                <div className='img__item' onClick={()=> setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt='hg'/>
                                </div>
                            </div>
                        </div>

                        <div className='col-fd-1-2'>
                            <div className='product__main-img'>
                                <img src={previewImg} alt=''/>
                            </div>
                        </div>

                        <div className='col-fd-1-3'>
                            <div className='single__product-content'>
                                <h2>
                                    {title}
                                </h2>
                                <p className='product__price'>
                                    Price:<span>Rs-{price}/-</span>
                                </p>
                                <p className='category'>
                                    Category: <span>{category}</span>
                                </p>
                                <button onClick={adItem} className='btn addTOCart'>
                                    Add to Cart
                                </button>

                            </div>
                        </div>


                    </div>


                    <div className='row-fd-2'>
                        <div className='col-fd-1-4'>
                            <div className='tabs'>
                                <h6 className={`${tab === 'desc' ? 'tab__active' : '' }`} onClick={()=> setTab('desc')}>Description</h6>
                                <h6 className={`${tab === 'rev' ? 'tab__active' : '' }`} onClick={()=> setTab('rev')}>Reviews</h6>
                            </div>


                            {
                                tab === 'desc' ? (<div className='tabs__content'>
                                    <p>
                                        {desc}
                                    </p>
                                </div>) : (<div className='tab__form'>
                                    <div className='review'>
                                        <p className='user__name'>
                                            John Doe
                                        </p>
                                        <p className='user__email'>
                                            john@gmail.com
                                        </p>
                                        <p className='feedback__text'>
                                            great product
                                        </p>
                                    </div>

                                    <div className='review'>
                                        <p className='user__name'>
                                            John Doe
                                        </p>
                                        <p className='user__email'>
                                            john@gmail.com
                                        </p>
                                        <p className='feedback__text'>
                                            great product
                                        </p>
                                    </div>

                                    <div className='review'>
                                        <p className='user__name'>
                                            John Doe
                                        </p>
                                        <p className='user__email'>
                                            john@gmail.com
                                        </p>
                                        <p className='feedback__text'>
                                            great product
                                        </p>
                                    </div>

                                    <form className='form' onSubmit={submitHandler}>
                                        <div className='form__group'>
                                            <input type='text' placeholder='Enter your name'
                                            onChange={(e)=> setEnteredName(e.target.value)} required
                                            />
                                        </div>

                                        <div className='form__group'>
                                            <input type='text' placeholder='Enter your email'
                                                   onChange={(e)=> setEnteredEmail(e.target.value)} required
                                            />
                                        </div>

                                        <div className='form__group'>
                                            <textarea placeholder='Feedback'
                                                      onChange={(e)=> setReviewMsg(e.target.value)} required
                                            />
                                        </div>

                                        <button type='submit' className='addTOCart'>
                                            Submit
                                        </button>
                                    </form>
                                </div>)
                            }


                        </div>




                    </div>

                    <div className='col-fd-1-5'>
                        <h3>
                            You might also like
                        </h3>

                    </div>

                    <div className='row-fd-3'>
                    <div className='col-fd-1-6'>
                    {
                        relatedProduct.map((item) => (
                            <div  key={item.id}>
                                <ProductCard item={item}/>
                            </div>
                        ))
                    }
                    </div>
                    </div>



                </div>

            </section>
        </Helmet>
    )
}
export default FoodDetails


const products = [
    {
        id: "01",
        title: "Chicken Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },

    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 115.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "03",
        title: "Double Cheese Margherita",
        price: 110.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "04",
        title: "Maxican Green Wave",
        price: 110.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "05",
        title: "Cheese Burger",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "07",
        title: "Seafood Pizza",
        price: 115.0,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "08",
        title: "Thin Cheese Pizza",
        price: 110.0,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "09",
        title: "Pizza With Mushroom",
        price: 110.0,
        image01: product_04_image_02,
        image02: product_04_image_01,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "10",
        title: "Classic Hamburger",
        price: 24.0,
        image01: product_05_image_02,
        image02: product_05_image_01,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "11",
        title: "Crunchy Bread ",
        price: 35.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "12",
        title: "Loaf Bread ",
        price: 35.0,
        image01: product_06_image_03,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];