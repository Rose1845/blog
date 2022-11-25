import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <React.Fragment>
        <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/articles'>Articles</Link>
            </li>

        </ul>
    </nav>
    <hr />
    </React.Fragment>
   
  )
}

export default Navbar