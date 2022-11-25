import React from 'react'

const Footer = () => {
  return (
   <React.Fragment>
     <div className='footer'>
      <hr />
      &copy; Copyright {new Date().getFullYear()}
    </div>
   </React.Fragment>
  )
}

export default Footer