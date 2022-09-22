import React,{useEffect, useState} from 'react'
import './form.css'
import {Redirect,useLocation} from "react-router-dom" 
import { Button } from 'react-bootstrap'

const EditCateg = () => {
    const location = useLocation()
    
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

    useEffect(()=>{
       setCateg({...location.state})
    },[])
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
        return   <form onSubmit={e=>e.preventDefault()}>
        <div className='form-group'>
                <label className='text-muted'>Photo</label>
                <input 
                type="file"
                onChange={handleChange}
                name="photo"
                />
            </div>
        <div className='form-group'>
                <label className='text-muted'>Nom</label>
                <input 
                type="text"
                value={nom}
                name="name"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>Description</label>
                <input 
                type="text"
                value={desc}
                name="desc"
                onChange={handleChange}
                />
            </div>
            <Button  variant=' btn-warning' className='btn btn-raised mt-2 forma' onClick={()=>submit()}>confirmer</Button>
        </form>
    }
    if(open){
       return  <Redirect to="/get-categ" />
    }
  return (
    <div className='container'>
        <h2 className='mt-5 mb-5'>Modifier une catégorie</h2>
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
  )
}
export default EditCateg