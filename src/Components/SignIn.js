import React,{useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'

function SignIn() {


    const [PhoneNumber,setPhoneNumber] = useState('')


    const Proceed=()=>{

        // axios.post('/next').then((res)=>{

            navigate('/reset3')

        // }).catch((err)=>{

            
        // })
     

    }


    const navigate = useNavigate()
    return (
        <div className="login-wrapper">
  
  
        <div className="brand">
        
        <h2 className='heading' > Yamak.ai </h2>


        </div>
        
        <div className="login">
        
        <div className="form">

        <div className="d-flex justify-content-around header">
        
        <h4  className='auth-link' onClick={()=>navigate('/login')}  > Sign In </h4>
        <h4> or </h4>
        <h4   className='auth-link' onClick={()=>navigate('/')} > Sign Up </h4>
        
        </div>


        <div className="google-block">
        logo Continue with Google
        </div>
        <div className="fb-block">
        logo Continue with Facebook
        </div>
  
        <div className="cutter">
          or
        </div>
  

  
  <div className="mobile-input">
  <input type="text" placeholder='Mobile Number/Email' />
  </div>
  

  
  <div className="terms-and-policy">
  

  
  <small> Terms and Condition
  </small>
  
  </div>
  
  <button onClick={()=>Proceed()} > Generate OTP  </button>
  

  
        
        </div>
        
        </div>
  
        
        </div>
    )
}

export default SignIn