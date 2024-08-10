import React from "react";
import reg from './assets/images/reg.png'
function App()
{
    return (
        <>

        <div className="app">
            <div className="box1">
                <img src={reg} alt="photo" style={{width:"250px",marginTop:"5%"}} />
            </div>
            <div className="box2">
            <h1>Register Now</h1>
            <form>
                <input type="text" placeholder="Name *" />
                <br />
                <br />
                
                <input type="text" placeholder="Email *" />
                <br />
                <br />
                
                <input type="text" placeholder="Mobile *" />
                <br />
                <br />
                
                <input type="submit" value="Register" placeholder="Name *" />
                
            </form>
            </div>
        </div>

        </>
    )
}
export default App