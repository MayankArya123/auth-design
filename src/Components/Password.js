import React from 'react'
import {useNavigate} from 'react-router-dom'

function Password() {

const navigate = useNavigate()

  return (
  <div className="enter-password-wrapper">
  
  <div className="brand">
  
          
  <h2 className='heading' > Yamak.ai </h2>
  </div>
  <div className="password-block">
  
  <div className="form">
  
  <h4  className='h4'> Enter password </h4>


  <div className="d-flex justify-content-end forgot-password-box">

      <small className='mb-1'>     <a href="#" onClick={()=>navigate('/reset1')} >  Forgot password  </a>   </small>      

  </div>


  
<div className="password-input">
<input type="text" placeholder='' />
</div>

<div class="check">
<input class="form-check-input mt-0" type="checkbox" checked value="" aria-label="Checkbox for following text input"/>

<small className='w-100 small'> Don't ask for password on this device </small>   


</div>

<button className='sign-in-button' >
       Sign in
</button>


<button className='get-an-otp-button'>
       Get an OTP on Your Mobile 
</button>

<small>    Having Trouble Logging in ?  <a href=""> Get help  </a>  </small>


  
  </div>
  
  </div>
  
  </div>
  )
}

export default Password