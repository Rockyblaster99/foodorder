import React,{ useState  } from 'react'
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/common-section/Common-Section";
import { FaSearch } from "react-icons/fa";
import './AllFoods.css'
import ReactPaginate from "react-paginate";
import ProductCard from '../components/product-card/ProductCard'




// all images imported from images directory
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

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState('')


    //page1,2,,......
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item)=>{
        if(searchTerm.value === '') return item;
        if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return item;
        }
        else{
            return console.log('not found')

        }

    })

    const productPerPage = 4;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(products.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title = 'All-Foods'>
            <CommonSection title='All Foods'/>
            <section className='af-s-1'>
                <div className='container'>
                    <div className='row-af-1'>
                        <div className='col-af-1-1'>
                            <div className='search__widget'>
                                <input type='text' value={searchTerm}
                                       onChange={(e) => setSearchTerm(e.target.value)}
                                       placeholder="I'm looking for...."/>
                                <span><FaSearch/></span>
                            </div>

                            <div className='sorting__widget'>
                                <select>
                                    <option>Default</option>
                                    <option value='ascending'>Alphabetically, A-Z</option>
                                    <option value='descending'>Alphabetically, Z-A</option>
                                    <option value='high-price'>High Price</option>
                                    <option value='low-price'>Low Price</option>
                                </select>
                            </div>
                        </div>


                        <div className='col-af-1-3'>
                            {
                                displayPage

                                    .map((item) => (
                                            <div className='mt-3' key={item.id}>
                                                <ProductCard item={item}/>
                                            </div>

                                        )
                                    )
                            }
                        </div>

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>


                    </div>

                </div>

            </section>
        </Helmet>
    )
}
export default AllFoods


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





