import React from 'react'
import Title from '../title'
import { sectionAbout } from '../../data'
import Awrapper from './Awrapper'
import '../about/about.css'
 function SectionAbout() {
  return (
    <>
    <section className='aboutPage'>
        <div className='conteneur flexSB'>
            <div className='left '>
                <img src="./images/Blog.webp" alt="" />
            </div>
            <div className="right ">
             <Title  className='title' subtitle='pourquoi nous?' title='Nous proposons des cours axés sur E-commerce  pour garantir la croissance de vos carrières '/> 
             <div className="items">
              {sectionAbout.map((val)=>(
                <div className="item ">
                  <div className="img">
                  <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div> 
                </div>
              ))}
            </div>
            </div>
            
        </div>
    </section >
    <Awrapper/>
    </>
  )
}

export default  SectionAbout