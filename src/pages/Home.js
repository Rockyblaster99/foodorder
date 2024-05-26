import React, {useState, useEffect} from 'react'
import Helmet from '../components/helmet/Helmet'
import heroImg from '../images/hero.png'
import './Home.css'
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Category from "../components/category/Category";
import featureImg01 from '../images/service-01.png'
import featureImg02 from '../images/service-02.png'
import featureImg03 from '../images/service-03.png'



import foodCategoryImg01 from '../images/hamburger.png'
import foodCategoryImg02 from '../images/pizza.png'
import foodCategoryImg03 from '../images/bread.png'


import ProductCard from "../components/product-card/ProductCard";
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";


import whyImg from '../images/location.png'
import { CiCircleCheck } from "react-icons/ci";

import networkImg from '../images/network.png'
import Testimonial from "../components/testimonial/Testimonial";



const featureData = [
    {
        title:'Quick Delivery',
        imgUrl:featureImg01,
        desc:'lorem lorem lorem lorem lorem lorem ',
        Minus:'TMKOC'
    },
    {
        title:'Super Dime In',
        imgUrl:featureImg02,
        desc:'lorem lorem lorem lorem lorem lorem ',
        Minus:'DTSSSP'
    },
    {
        title:'Easy Pick Up',
        imgUrl:featureImg03,
        desc:'lorem lorem lorem lorem lorem lorem ',
        Minus:'BDSAH'
    },
]


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
      id: "13",
      title: "Loaf Bread ",
      price: 35.0,
      image01: product_06_image_03,
      image02: product_06_image_02,
      image03: product_06_image_03,
      category: "Bread",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];


const Home = () => {

    // const [allProducts, setAllProducts] = useState(products);
    //
    // const filterItem = (categItem)=>{
    //     const updateItems = products.filter((curElement)=>{
    //         return curElement.category === categItem
    //     });
    //     setAllProducts(updateItems);
    // }
    //



    //this code for filter
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    //this code for another hot pizza only
    const [hotPizza, setHotPizza] = useState([]);
    useEffect(()=>{
        const filterPizza = products.filter((item)=> item.category === 'Pizza');
        const slicePizza = filterPizza.slice(0,4);
        setHotPizza(slicePizza);
    },[])



    //this code for filter
    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(
                (item) => item.category === "Bread"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);

    return (
        <>
        <Helmet title='Home'>
            <section>
               <div className='container'>
                   <div className='row-2'>
                       <div className='hero__content'>
                           <h5>Easy way to make an order</h5>
                           <h1><span>HUNGRY?</span> Just wait <br/> food at <span>your door</span></h1>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing ,
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>

                           <div className='hero__btns'>
                               <button className='order__btn'>
                                   Order now<FaArrowRight/>
                               </button>

                               <button className='all__foods-btn'>
                                   <Link to=''>See all foods</Link>
                               </button>

                           </div>

                           <div className='charge__shit'>
                               <p className='info'>
                                   <span className='shipping__icon'><FaCar className='iii'/></span>No shipping charge
                               </p>

                               <p className='info'>
                                   <span className='shipping__icon'><IoShieldCheckmarkOutline className='iii'/></span>100% secure checkout
                               </p>
                           </div>
                       </div>

                       <div className='hero__img'>
                           <img className='img-1' src={heroImg} alt='hero-page'/>
                       </div>
                   </div>

               </div>
            </section>

            <section >
                <Category/>
            </section>

            <section>
                <div className='container'>
                    <div className='row-5'>
                        <div className='col-f'>
                        <h5>What we serve</h5>
                        <h2>Just sit back at home</h2>
                        <h2>we will <span>take care</span></h2>
                        <p className='first-p'>lorem lorem lorem lorem lorem
                            lorem lorem lorem lorem lorem
                        </p>
                        <p className='second-p'>lorem lorem lorem lorem lorem
                            lorem lorem lorem lorem lorem
                        </p>
                        </div>


                        <div className='col-6'>


                        {
                            featureData.map((item,index)=> (
                                <div className='col-s' key={index}>
                                    <div className='feature__item'>
                                        <img src={item.imgUrl} alt='ff'/>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                        <p className='minus'>{item.Minus}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>


                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row-7'>
                        <div className='col-h-s-4-1'>
                            <h2>Popular Foods</h2>
                        </div>

                        <div className='col-h-s-4-2'>
                            <div className='food__category'>
                                <button className={`all__btn  ${
                                    category === "ALL" ? "foodBtnActive" : ""
                                } `} onClick={() => setCategory("ALL")}>
                                    All
                                </button>
                                <button className={`${
                                    category === "BURGER" ? "foodBtnActive" : ""
                                } `} onClick={() => setCategory("BURGER")} >
                                    <img className='sss' src={foodCategoryImg01} alt='btn-1'/>Burger
                                </button>
                                <button onClick={() => setCategory("PIZZA")}>
                                    <img src={foodCategoryImg02} alt='btn-1'/>Pizza
                                </button>
                                <button onClick={() => setCategory("BREAD")}>
                                    <img src={foodCategoryImg03} alt='btn-1'/>Bread
                                </button>
                            </div>
                        </div>


                        <div className='col-h-s-4-3'>
                        {
                            allProducts.map((item)=> (
                                <div className='list__of__items' key={item.id}>
                                    <ProductCard item={item}/>
                                </div>
                            ))
                        }
                        </div>

                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row-h-s-5'>
                        <div className='location-img'>
                            <img src={whyImg} alt='w-1'/>

                        </div>
                        <div className='col'>
                            <div className='why__tasty-treat'>
                                <h2 className='tasty__treat-title'>
                                    Why <span>Tasty Treat?</span>
                                </h2>
                                <p className='treat-desc'>
                                    lorem lorem lorem lorem lorem lorem lorem
                                    lorem lorem v v v lorem lorem lorem
                                    lorem lorem lorem lorem lorem lorem
                                </p>

                                <ul>
                                    <li>
                                        <p className='details__p'>
                                            <CiCircleCheck className='icon-circle'/> Fresh and tasty foods
                                        </p>
                                        <p className='treat__desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing , sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>

                                    <li>
                                        <p className='details__p'>
                                            <CiCircleCheck className='icon-circle'/> Quality Support
                                        </p>
                                        <p className='treat__desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing , sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>

                                    <li>
                                        <p className='details__p'>
                                            <CiCircleCheck className='icon-circle'/> Order from any location
                                        </p>
                                        <p className='treat__desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing , sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row-h-s-6'>
                        <div className='col-h2'>
                            <h2>Hot Pizza</h2>
                        </div>

                        <div className='col-h-s-4-3 pizza-only'>
                        {
                            hotPizza.map((item)=>(
                                <div className='col' key={item.id}>
                                    <ProductCard item={item}/>
                                </div>
                            ))
                        }
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row-h-s-7'>

                        <div className='col-testimonial'>
                            <h5 className='testimonial__subtitle'>Testimonial</h5>
                            <h2>What our <span>customers</span> are saying</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <Testimonial/>


                        </div>
                        <div className='col-net-img'>
                            <img src={networkImg} alt='network'/>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
            {/*<h1>Hii</h1>*/}
        </>
    )
}
export default Home
