// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
//  const Login = () => {
//   const [userName,setUserName]=useState('');
//   const [pass,setPass]=useState('');
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(userName);
//   }

//   return (
//    <form onSubmit={handleSubmit}>
//     <label htmlFor="userName">User Name</label>
//     <input  value={userName} onChange={(e)=>setUserName(e.target.value) } type="text" />
//     <label htmlFor="password">Password</label>
//     <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" name="password"  id="password"/>
//     <button type="submit">Submit</button>
//    </form>
//   )
// }

// export default Login




// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import './login.css';
// function Login() {
//   const [userName,setUserName]=useState('');
//   const [pass,setPass]=useState('');

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(userName);
//   }

//   return (
//     <div className='login'>
//     <form onSubmit={handleSubmit}  className='login-form'  >
//         <label htmlFor="userName">User Name </label>
//       <input value={userName} onChange={(e)=>setUserName(e.target.value)} className='input' type="text" />
//       <br />
//       <label htmlFor="password"> Password</label>
//    <input className='input' value={pass} onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="password" />
//    <br />
//    <div className="bott">
//     <p>New User</p>
// <Link to='/Signup'>SignUp</Link>
// <button  className='bt' type='submit'> Submit</button>
//     </div>
//     </form>
//     </div>
//   )
// }

// export default Login




import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />

        <button className='btn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
