import React,{useState,useEffect} from 'react'
import axios from 'axios';
 const GetCateg = props=> {
  
    const [nom , setNom] = useState("");
    const [desc , setDesc] = useState("");
 
    useEffect(()=>{
        axios.get(`http://localhost:5000/get-categ/${props.match.params.id}`)
        .then(res=>[
            setNom(res.data.nom),
            setDesc(res.data.desc)
        ])
        .catch(err=>console.log(err));
    }, [props]);
  
  
    return (
    <div><h4>{nom}</h4>
    <p>{desc}</p>
    </div>
  )
}
export default GetCateg;