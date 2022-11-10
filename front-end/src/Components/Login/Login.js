import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
        <div className="UsersBox">
            <div className="Signin-Box">
                <label className='labels' htmlFor="uname">Username</label>
                <input className='inputs' type="text" name='uname' placeholder='Enter your  username' />
                <label className='labels' htmlFor="passwd"> Password </label>
                <input className='inputs' type="password" name='passwd' placeholder='Enter your password'/>
                <button  type='submit' className='btn-singin'>SignIn</button>
            </div>
            <div className="Signup-Box">
                <label className='labels' htmlFor="fname">Firstname</label>
                <input className='inputs' type="text" name='fname' placeholder='ex: Jhon' />
                <label className='labels' htmlFor="lname">Lastname</label>
                <input className='inputs' type="text" name='lname' placeholder='ex: Doe' />
                <label className='labels' htmlFor="email">E-mail</label>
                <input className='inputs' type="text" name="email" id="email" placeholder='example@GoMyCode.ma' />
                <label className='labels' htmlFor="passwd">Password</label>
                <input className='inputs' type="password" name='passwd' placeholder='Enter a secure Password' />
                <label className='labels' htmlFor="passwd-cm">Confirm Password</label>
                <input className='inputs' type="password" name='passwd-cm'  placeholder='re-enter your password'/>
                <button type='submit' className='btn-signup'>SignUp</button>
            </div>
        </div>
    </>
  )
}

export default Login