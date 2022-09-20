import React ,{useState} from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './categorie.css'
const AddCateg =()=>{
    const [nom , setNom] = useState("");
    const [desc , setDesc] = useState("");
    const [message , setMessage] = useState("");
    const [fileName , setFileName] = useState("");

    
    const onChangeFile=(e)=>{
        setFileName(e.target.files[0]);
    }
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('desc',desc);
        formData.append('img',fileName);

        setNom("");
        setDesc("");
        axios.post('http://localhost:5000/add-categorie', formData)
        .then((res) =>setMessage(res.data))
        .catch((err) => {
           console.log(err);
        });

    }
return(


    <>
   
    
    <div className=' form'>
   
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
    <h1>Ajouter une catégorie</h1>
    <br/>
    <span className="message">{message}</span>
    <br/>

    <input 
        type="text"
        placeholder="nom"
        name="nom"
        value={nom}
       
        onChange={(e)=>setNom(e.target.value)}
    />
    <br/>

    <textarea 
        
        name="desc"
        placeholder="description"
        
       
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
        rows="3"
    />
 <br/>
<input 
        type="file" 
       
        filename="img"
       
        onChange={onChangeFile}
    />
    <br/>

 <Button type='submit' variant='warning'>confirmer</Button>
 
</form>
</div>
    
    </>
)



}

export default AddCateg;