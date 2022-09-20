import React from 'react'
import { online } from '../../data'
import Title from '../title'

 function Cours() {
  return (
    <>
    <section className='online'>
        <div className="container">
          <Title subtitle='Découvrir nos cours en ligne' />  
        </div>
        <div className="content grid3">
            {online.map((val)=>(
                <div className="box">
                    <div className="img">
                        <img src={val.cover} alt="" />
                        <img src={val.hoverCover} alt="" className='show'/>
                    </div>
                    <h2>
                      {val.courseName}  
                    </h2><br/>
                    <span>
                      {val.course}  
                    </span>
                </div>
            ))}
        </div>
    </section >
    
    </>
  )
}

export default Cours