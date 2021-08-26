import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { MdShoppingBasket } from 'react-icons/md'

const NavBar = ({ totalItems }) => {
  return (
    <div className='navBar'> 
      <Link to='/'>
        <h1>Rinse&Repeat by Jumi</h1>
      </Link>
      <Link to='/cart'>
        <div className='icon--container'>
          <MdShoppingBasket className='icon--shoppingBasket' />
          <span className='nav--badge'>{totalItems}</span>
        </div>
        
      </Link>
      
    </div>
  )
}

export default NavBar
