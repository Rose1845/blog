import React from 'react'

const HomePage = () => {
  return (
    
    <div className='home'>

       <h1 className='title'>Hello, welcome to my blog!</h1>

        <div className='container'>
        <p id='content'>
            Welcome to my blog! Proin congue<br/>
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.<br/>
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,<br/> 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut <br/>
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.
        </p>
        <a href="#" className="btn">Read More</a>
        </div>
        
        

    </div>
  )
}

export default HomePage