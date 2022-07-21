import React from 'react'
import data from './data.jsx';


export default function Main() {
  return (
    <>
      <div className='visual-main'>
        <img src='./images/visual_main_01.jpg'/>
      </div>

      <div className='container'>
        {
          data.map((value, index) => {
            return (
              <div className='col-md-3'>
                <img src={`./images/best_0${index+1}.png`} width='280px'/>
                <h3>{value.title}</h3>
                <p>{value.price}</p>
              </div>
            )
          })
        }
      </div>  
    </>
  )
}
