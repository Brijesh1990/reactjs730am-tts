import React from "react";
import { Container } from "react-bootstrap";
import brijesh from '../../assets/images/brijesh.jpg'
const Slider=()=>{

    return(
        <>
        <Container fluid className="portfolio-slider p-5">
         <p className="text-center">
            <img src={brijesh} alt="brijesh" title="hello brijesh" className="img-fluid" />
            <p className="text-center h1 mt-2 text-white portfolio-name">Rakesh Dangar</p>
            <hr className="border border-white border-5 mx-auto w-25" />
            <p className="text-center mt-2 text-white h4">Web Developer - Graphic Artist - User Experience - Designer-Web Designer</p>
         </p>

        </Container>
        </>
    )
}
export default Slider