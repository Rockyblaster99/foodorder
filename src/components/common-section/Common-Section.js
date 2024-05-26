import React from 'react'
import './Common-Section.css'

const CommonSection = (props) => {
    return (
        <section className='common__section'>
            <div className='container'>
                <h2 className='all-food__h2'>{props.title}</h2>
            </div>
        </section>
    )
}
export default CommonSection
