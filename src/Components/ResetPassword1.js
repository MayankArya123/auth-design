import React from 'react'
import {useNavigate} from 'react-router-dom'

function ResetPassword1() {

const navigate = useNavigate()

  return (
<div className="reset-password-wrapper-1">

<div className="brand">

        
<h2 className='heading' > Yamak.ai </h2>

</div>

<div className="reset">

    <div className="form">

    <h4> Reset Password </h4>

    <div class="check">
    <input class="form-check-input mt-0" type="checkbox" checked value="" aria-label="Checkbox for following text input"/>

 <p> Sent to 919982727737 </p>   


  </div>

    <div class="check">
    <input class="form-check-input mt-0" type="checkbox" checked value="" aria-label="Checkbox for following text input"/>

    <p> Sent to 919982727737 </p>   
  </div>

  <button onClick={()=>navigate('/reset2')} > Generate OTP </button>

  <small>   Having Trouble Logging in ?  <a href="#"> Get Help </a>  </small>


    </div>
</div>

</div>
  )
}

export default ResetPassword1