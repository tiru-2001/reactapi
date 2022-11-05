import React, { useEffect, useState } from 'react';
import './quotes.scss'
import axios from 'axios';

const Qutecompon = () => {
    const basueur="https://apiqu.herokuapp.com/quote"    
    const[apii,setapi]=useState({});
useEffect(
    ()=>{
axios.get(basueur).then((res)=>{setapi(res.data)
console.log(res.data);}).catch((err)=>{
    console.log(`error is due to promise${err}`);
})
},[]
)
    

console.log(apii.quote);




  return (
   <div className="container-fluid quoteContainer">
    <div className="row mainrow justify-content-center align-items-center">
        <div className="col-md-9 mainCol">
            <h1 className='text-center headingg'>RaNdOm QuOtEs GeNeRaToR</h1>
            <div className="row secondRow">
                <div className="col-md-12 subcol">
                    <h3 className='text-center'>"{apii.quote}"</h3>
                    <h5 className="text-end">-{apii.author}</h5>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Qutecompon