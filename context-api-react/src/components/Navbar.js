import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link  to='/pageOne' > Page One</Link>
      <Link  to='/pageTwo' > Page Two </Link>
      <Link  to='/pageThree' > Page Three  </Link> 
    </nav>
  )
}

export default Navbar