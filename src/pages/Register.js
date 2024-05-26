import React, {useRef} from 'react'
import CommonSection from "../components/common-section/Common-Section";
import Helmet from "../components/helmet/Helmet";
import {Link} from "react-router-dom";
import './Login.css'


const Register = () => {
    const signupEmailRef = useRef();
    const signupPasswordRef = useRef();
    const signupNamedRef = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
    }
    return (

        <Helmet title='Login_page'>
            <CommonSection title='Login-Page'/>
            <section>
                <div className='container'>
                    <div className='row-login-1'>
                        <form className='form__login ' onSubmit={submitHandler}>
                            <div className='form__group-1'>
                                <input type='text' placeholder='Name' ref={signupNamedRef} required/>
                            </div>

                            <div className='form__group-1'>
                                <input type='text' placeholder='email' ref={signupEmailRef} required/>
                            </div>

                            <div className=' form__group-1'>
                                <input type='password' placeholder='password' ref={signupPasswordRef} required/>
                            </div>

                            <button className='addTOCart btn__center'>Login</button>

                        </form>

                        <div className='below'>
                            <Link to='/login' className='register__page'>Already have an account?Login</Link>

                        </div>


                    </div>
                </div>
            </section>
        </Helmet>
    )
}
export default Register
