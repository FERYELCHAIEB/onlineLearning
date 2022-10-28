import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import DefaultPhoto from '../../../src/images/logo.png'

import '../admin/admin.css'
import { Button } from 'react-bootstrap';

export const Categorie = () => {
    const [posts, setPosts] = useState([])
    const [del,setDel] = useState({})

    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5000/get', {
                    method: 'GET'
                })
                const data = await res.json();
                setPosts(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        return getData;
    }, [del._id])


  return (
    < >  {!posts ? <h2>Loading...</h2> :
    posts.map((post) => {
        let photoUrl = post.photo ? `http://localhost:5000/photo/${post._id}?${new Date().getTime()}` : DefaultPhoto

        return(
         <div className='col-sm-4' key={post._id}>
    
            <MDBCard >
                <MDBCardImage
                    src={photoUrl}
                    alt={post.name}
                    style={{ height: "50px", width: "50%", objectFit: "cover" }}
                />
                <MDBCardBody>
                    <MDBCardTitle style={{fontSize:"18px"}}>{post.nom}</MDBCardTitle>
                    <MDBCardText style={{fontSize:"15px",color:"grey"}}>
                        {post.desc}
                    </MDBCardText>
                  
                </MDBCardBody>
            </MDBCard>
        </div>)
    })

}</>
  )
}
