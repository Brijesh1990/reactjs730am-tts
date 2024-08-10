import React from "react";
const Inline=()=>{
    return(
        <>
           <div style={{width:"50%",height:"auto",margin:"auto"}}>
            <h1 style={{color:"blue",fontSize:"45px"}}>Contact with us</h1>
            <p>Lets start to contact in Google map</p>
            <p><iframe src="https://www.google.com/maps/embed?pb=!4v1723085020606!6m8!1m7!1stpOItHiXTPqX1QLBEagMQA!2m2!1d22.29016509603721!2d70.7748205298472!3f70.10676863089208!4f2.691609517155925!5f0.7820865974627469" width="600" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
           </div>
        </>
    )

}
export default Inline