import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className="Home">
            <h2>Access your account from here {'=>'} 
                <Link to='/Login'><p>Connect</p></Link>
            </h2>
        </div>
    </>
  )
}

export default Home