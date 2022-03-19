import React from 'react'
import { useNavigate} from 'react-router-dom'

function SignUp() { 

  const navigate = useNavigate() 

  return (
      <div className="sign-up-wrapper">


      <div className="brand">
      
      <h2 className="heading" > Yamak.ai </h2>
      
      </div>
      
      <div className="sign-up">
      
      <div className="form">
      <h4> Create an Account </h4>
      <div className="google-block">
      logo Continue with Google
      </div>
      <div className="fb-block">
      logo Continue with Facebook
      </div>

      <div className="cutter">
      <hr />  or <hr />
      </div>

      <div className="name-block">
          <div className="first-name">
            <input type="text" placeholder='First Name' />
          </div>
          <div className="last-name">
          <input type="text" placeholder='Last Name' />

          </div>
      </div>

<div className="mobile-input">
<input type="text" placeholder='Email/Mobile  Number' />
</div>

<div className="password-input">
<input type="text" placeholder='Password' />
</div>

<small  className='password-info' >  It contains atleast 6-15 characters and one uppercase lowercase special characters and number </small>

<div className="reenter-password">
<input type="text" placeholder='Re-enter Password' />
</div>


<div className="terms-and-policy">

<input class="form-check-input mt-0" type="checkbox"  checked value="" aria-label="Checkbox for following text input"/>

<p> Terms and Condition
</p>

</div>

<button>create an account</button>

<small> Already have an account ? <a href='#' onClick={()=>navigate('/login')} > sign in</a> </small>

      
      </div>
      
      </div>

      
      </div>
  )
}

export default SignUp