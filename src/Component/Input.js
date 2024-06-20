import { useState } from "react";
export function Input(){
  
    const [value, setvalue]= useState("");
    const [arr, setarr]=useState([]);
    var index=0;
   
    return (
        <div>
             <input className="input_identifier" placeholder="Enter the Task"  value ={value} 
             onChange={(e)=>{
                    setvalue(e.target.value);
                    //console.log(e.target.value);
             }}></input>

             <button className="button" onClick={(e)=>{
               // setvalue(e.target.value);
                var newarr= arr;
                newarr.push(value);
                setarr(newarr);
                //console.log(arr);
                setvalue("");
             } 
             }>
                Submit
             </button>

             <ul className="list" onClick={
                  (e)=>{
                 
                 var parent= e.target.parentNode;
                 newarr= arr.filter((element, index) => {

                       return index != parent.id;
                 })
                 console.log(newarr);
                 setarr(newarr);
             }}>
                
                { arr.map((element) => <li id= {index} key={index++}>

                     <h2>{element}</h2>
                     <button 
             > Delete</button>
                </li>)}

             </ul>


        </div>
    )
    
}

