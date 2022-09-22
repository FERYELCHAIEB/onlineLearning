
import React,{useState} from 'react'
import './form.css'
import { Redirect} from "react-router-dom" 
import { Button } from 'react-bootstrap';

const CreateCateg = () => {
    const [categ,setCateg]=useState({
        nom:"",
        desc:"",
        photo:"",
        formData: new FormData(),
        error:"",
        open:false,
    })
    const{nom,desc,photo,formData,error,open}=categ

    const handleChange=event=>{
        const{name}=event.target;
        const value=name==="photo"?event.target.files[0]:event.target.value
        formData.set(name,value)
        setCateg({...categ,[name]:value,error:""})
    }

    const submit=async()=>{
        try{
            const res=await fetch(`http://localhost:5000/create`,{
                method:"post",
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
                name="nom"
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
        <h2 className='mt-5 mb-5'>Ajouter une Catégorie</h2>
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

export default CreateCateg