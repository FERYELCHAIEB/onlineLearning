import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import DefaultPhoto from '../../../images/logo.png'
import NavAdmin from '../NavAdmin';
import '../admin.css'
import { Button } from 'react-bootstrap';

const GetForm = () => {
    const [posts, setPosts] = useState([])
    const [del,setDel] = useState({})

    const deletePost = async(id)=>{
        let response = await fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        const data = await response.json()
        setDel(data)
    }

    const deleteConfirmed = (userId)=>{
        let ans = window.confirm("Are you sure you want to delete")
        if(ans){
            deletePost(userId)
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
        <>
           <NavAdmin/>
           
            <div className='row ok'>
                
            <div className='boutton'>
            <Link to="/create" className='btn btn-outline-info  link' >Ajouter une catégorie</Link>
           </div>
                {!posts ? <h2>Loading...</h2> :
                    posts.map((post) => {
                        let photoUrl = post.photo ? `http://localhost:5000/photo/${post._id}?${new Date().getTime()}` : DefaultPhoto

                        return(
                         <div className='col-lg-4' key={post._id}>
                    
                            <MDBCard>
                                <MDBCardImage
                                    src={photoUrl}
                                    alt={post.name}
                                    style={{ height: "150px", width: "100%", objectFit: "cover" }}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle style={{fontSize:"18px"}}>{post.nom}</MDBCardTitle>
                                    <MDBCardText style={{fontSize:"15px",color:"grey"}}>
                                        {post.desc}
                                    </MDBCardText>
                                    <Link to={`/edit/${post._id}`} state={{ ...post }}
                                        className='btn btn-warning'
                                    ><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <Button
                                        variant='danger ms-3'
                                        onClick={()=>deleteConfirmed(post._id)}
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </div>)
                    })

                }

            </div>

        </>
    )
}

export default GetForm