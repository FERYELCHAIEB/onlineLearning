import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import '../admin.css'
import {Link, Redirect} from "react-router-dom" 
import NavAdmin from '../NavAdmin'

const EditForm = () => {
    
    
    const [categ,setCateg]=useState({
        nom:"",
        desc:"",
        photo:"",
       
        error:"",
        open:false,
    })
    const[form,setForm]=useState({
        formData: new FormData(),
    })
    const {formData} = form;
    const{_id,nom,desc,photo,error,open}=categ

    
    const handleChange=event=>{
        const{name}=event.target;
        const value=name==="photo"?event.target.files[0]:event.target.value
        formData.set(name,value)
        setCateg({...categ,[name]:value,error:""})
    }

    const submit=async()=>{
        try{
            const res=await fetch(`http://localhost:5000/edit/${_id}`,{
                method:"PUT",
                body:formData
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                setCateg({...categ,error:data.error})
            }
            else{
                setCateg({nom:"",desc:"",photo:"",open:true})

            }
        }
        catch(err){
            console.log(err)
        }
    }
   

    //form
    const fillForm=()=>{
        return   <form onSubmit={e=>e.preventDefault()} className="formCateg">
        <div className='form-group'>
                <label className='text-muted'>Image de la catégorie</label><br/>
                <input 
                type="file"
                onChange={handleChange}
                name="photo"
                />
            </div>
        <div className='form-group'>
                <label className='text-muted'>Nom de la catégorie</label><br/>
                <input 
                type="text"
                value={nom}
                name="name"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>Description</label><br/>
                <input 
                type="text"
                value={desc}
                name="desc"
                onChange={handleChange}
                />
            </div>
          
            <div>
            <Button variant="info mt-3" onClick={()=>submit()} style={{color:"#fff"}}>Modifier</Button>{' '}
            <Link className="btn btn-outline-info mt-3" to='/getform' >retour</Link>
            </div>
        </form>
    }
    if(open){
       return  <Redirect to="/" />
    }
  return (<>
    <NavAdmin/>
    <div className='container'>
        <h2 className='mt-5 mb-5' style={{color:"#05DDFA"}}>Modifier catégorie</h2>
        <div className='alert alert-danger' 
        style={{display:error?"":"none"}}
        >
            {error}
        </div>
        <div className='alert alert-info' 
        style={{display:open?"":"none"}}
        >
            post successfully sumitted
        </div>
        {fillForm()}
      

    </div>
    </>
  )
}

export default EditForm