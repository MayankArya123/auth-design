import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function ResetPassword2() {


const navigate = useNavigate()


const [Value1,setValue1] = useState('')
const [Value2,setValue2] = useState('')
const [Value3,setValue3] = useState('')
const [Value4,setValue4] = useState('')
const [Value5,setValue5] = useState('')
const [Value6,setValue6] = useState('')


  return (
<div className="reset-password-wrapper-2">

<div className="brand">

        
<h2 className='heading' > Yamak.ai </h2>

</div>

<div className="reset">

    <div className="form">

    <h4> Reset Password </h4>

    <h6> please enter OTP to reset password  </h6>

    <div class="check">
    <input class="form-check-input mt-0" type="checkbox" checked  value="" aria-label="Checkbox for following text input"/>

 <p> Sent to 919982727737 </p>   


  </div>

<div className="verify">



<div className="">
<input type="text"   value={Value1}    onChange={(e)=>setValue1(e.target.value)}    disabled={Value1 ? true : false}  />
</div>
<div className="">
<input type="text" value={Value2}  onChange={(e)=>setValue2(e.target.value)}    disabled={Value2 ?  true : false} />
</div>
<div className="">
<input type="text" value={Value3}  onChange={(e)=>setValue3(e.target.value)}   disabled={Value3 ? true : false}  />
</div>
<div className="">
<input type="text" value={Value4}  onChange={(e)=>setValue4(e.target.value)}    disabled={Value4 ? true : false}  />
</div>
<div className="">
<input type="text" value={Value5}  onChange={(e)=>setValue5(e.target.value)}    disabled={Value5 ? true : false}  />
</div>
<div className="">
<input type="text" value={Value6}   onChange={(e)=>setValue6(e.target.value)}   disabled={Value6 ? true : false}  />
</div>



</div>


  
  <h6> Didn't get the Code ?   </h6>

<div className="password-input">
<input type="text" placeholder='New  Password' />
</div>

<div className="reenter-password">
<input type="text" placeholder='Re-enter Password' />
</div>


  <button> Confirm Changes </button>

  <small>   Having Trouble Logging in ?  <a href="">  Get help     </a>    </small>


  <p>  Back to <a onClick={()=> navigate('/login')} >     <a href="">   sign in      </a>    </a>  </p>
    </div>
</div>

</div>
  )
}

export default ResetPassword2