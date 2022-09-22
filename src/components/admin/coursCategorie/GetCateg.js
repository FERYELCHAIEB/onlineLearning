import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import DefaultPhoto from '../../../images/logo.png'
import { Button } from 'react-bootstrap';
import './form.css'
const GetCateg = () => {
    const [posts, setPosts] = useState([])
    const [del,setDel] = useState({})

    const deletePost = async(id)=>{
        let response = await fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        const data = await response.json()
        setDel(data)
    }

    const deleteConfirmed = (cId)=>{
        let ans = window.confirm("Are you sure you want to delete")
        if(ans){
            deletePost(cId)
        }
    }
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
        
      
        
             <div className='container'>
            <h2 className='mt-5 mb-5'>Liste des catégories</h2>
            <Link
                         className='btn btn-info text-btn'
                       
                        to="/create">
                      <i class="fa-solid fa-list"></i> Ajouter une catégorie 
                    </Link>
            <div  className='row'>
                {!posts ? <h2>Loading...</h2> :
                    posts.map((post) => {
                        let photoUrl = post.photo ? `http://localhost:5000/photo/${post._id}?${new Date().getTime()}` : DefaultPhoto

                        return <div className='col-lg-5 marge' key={post._id}>
                            <MDBCard>
                                <MDBCardImage
                                    src={photoUrl}
                                    
                                    style={{ height: "120px", width: "80%", objectFit: "contain" }}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{post.nom}</MDBCardTitle>
                                    <MDBCardText className='text-card'>
                                        {post.desc}
                                    </MDBCardText>
                                    <Link to={`edit/${post._id}`} state={{ ...post }}
                                        className='btn btn-warning'
                                    ><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <Button
                                        variant='btn btn-danger ms-3' 
                                        onClick={()=>deleteConfirmed(post._id)}
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    })

                }

            </div>

        </div>
        
    )
}

export default GetCateg