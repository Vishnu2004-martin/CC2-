import React,{useState}from "react";
import './Day8Styles.css'
import { useEffect } from "react";


 function Day8() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("Great...This is time to learn HOOKS....? ");
        },3000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}
export default Day8;