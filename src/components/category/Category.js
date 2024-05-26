import React from 'react'
import categoryImg01 from '../../images/category-01.png'
import categoryImg02 from '../../images/category-02.png'
import categoryImg03 from '../../images/category-03.png'
import categoryImg04 from '../../images/category-04.png'
import './Category.css'

const categoryData = [
    {
        display:'FastFoods',
        imgUrl:categoryImg01
    },
    {
        display:'Pizza',
        imgUrl:categoryImg02
    },
    {
        display:'Asian Food',
        imgUrl:categoryImg03
    },
    {
        display:'Raw Veg Meat',
        imgUrl:categoryImg04
    },
]
const Category = () => {
    return (
        <div className='container'>
            <div className='row-3'>
                {
                    categoryData.map((item,index)=>(
                        <div key={index}>
                            <div className='category__item'>
                                <div className='category__img'>
                                    <img src={item.imgUrl} alt='category-item' />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
export default Category
