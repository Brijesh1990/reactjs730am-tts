import React from "react";
const Anim=()=>{
    return (
        <>
            <div className="w-2/4 bg-black text-white mx-auto p-10 mt-24">
                <h1 className="text-center text-5xl animate-pulse">Register with us</h1>
                <hr className="border border-spacing-1 border-white w-40 mx-auto" />
                {/* <div className="flex flex-row">
                    <div className="w-40 bg-pink-600 m-4 p-4">01</div>
                    <div className="w-40 bg-pink-600 m-4 p-4">02</div>
                    <div className="w-40 bg-pink-600 m-4 p-4">03</div>
                </div>
      */}


      <div className="flex flex-row-reverse">
                    <div className="w-40 bg-pink-600 m-4 p-4">01</div>
                    <div className="w-40 bg-pink-600 m-4 p-4">02</div>
                    <div className="w-40 bg-pink-600 m-4 p-4">03</div>
                </div>
     
     
            </div>
        </>
    )
}

export default Anim