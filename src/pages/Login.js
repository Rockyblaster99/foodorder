import React, {useRef} from 'react'
import CommonSection from "../components/common-section/Common-Section";
import Helmet from "../components/helmet/Helmet";
import {Link} from "react-router-dom";
import './Login.css'


const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();


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
                                <input type='text' placeholder='email' ref={loginNameRef} required/>
                            </div>

                            <div className=' form__group-1'>
                                <input type='password' placeholder='password' ref={loginPasswordRef} required/>
                            </div>

                            <button className='addTOCart btn__center'>Login</button>

                        </form>

                        <div className='below'>
                            <Link to='/register' className='register__page'>Don't have an account?Create an account</Link>

                        </div>


                    </div>
                </div>
            </section>
        </Helmet>
    )
}
export default Login
