import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function ResetPassword3() {


const navigate = useNavigate()

const [Value1,setValue1] = useState('')
const [Value2,setValue2] = useState('')
const [Value3,setValue3] = useState('')
const [Value4,setValue4] = useState('')
const [Value5,setValue5] = useState('')
const [Value6,setValue6] = useState('')



const Proceed=()=>{

  // axios.post('/next').then((res)=>{

      navigate('/password')

  // }).catch((err)=>{

      
  // })


}



  return (
<div className="reset-password-wrapper-3">

<div className="brand">

        
<h2 className='heading' > Yamak.ai </h2>

</div>

<div className="verify-otp">

    <div className="form">

    <h4 className='text-start' > Verify OTP </h4>

    <div class="check">
 

 <p> Sent to 919982727737  <a href=""> Edit </a> </p>   


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


<div class="d-flex justify-content-evenly align-items-center info">


<input class="form-check-input mt-0" type="checkbox"  checked value="" aria-label="Checkbox for following text input"/>

<div className="">
<small className='small'> Don't ask for OTP on the device </small>
</div>
   


</div>



  <button onClick={ ()=> Proceed()} > Generate OTP </button>

  <small className='small mt-4' >   Didn't get the Code ?  <a href=""> Resend </a>  </small>

  <button > Generate OTP </button>

  <small >   Having Trouble Logging in ? <a href=""> Get help </a>  </small>


    </div>
</div>

</div>
  )
}

export default ResetPassword3