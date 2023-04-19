import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'


const success =() => {


  prompt(`Welcome Successfully registered`)
 
}
const Signup = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [name,setName]=useState('');
  const [email,setemail]=useState('');
  const [mobileNumber,setMobileNumber]=useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userName);
  }
  return (
    <div className='signup'>
    <form onSubmit={handleSubmit} >
       <label htmlFor="name">  First Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" id='name' />
      <br />
     
      <label htmlFor="userName">User Name </label>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)}  type="text" />
      <br />
      <label htmlFor=" email">Email</label>
      <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" id="email" />
      <br />
      <label htmlFor="mobileNumber">Mobile Number </label>
      <input value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}  type="number"  id="number" />
      <br />
      <label htmlFor="password">Set Password</label>
   <input  type="password"  id="password" value={password} onChange={handlePasswordChange} />
<br />
      <label htmlFor=" confirm-assword">Confirm Password </label>
      <input   type='password'  id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
<br />
<div className="bottom">
    <p>Already registered</p>
<Link to='/Login'>Login</Link>
<button className='btn' onClick={success}> Submit</button>

</div>

    </form>
    </div>
  )
}

export default Signup
