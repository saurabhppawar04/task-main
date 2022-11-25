import React from 'react'
import LeftBody  from "./LeftBody"
import RightBody from "./Rightbody"

function Body() {
    return (
        <div className='d-flex my-0' style={{height: "90vh", width: '100vw'}}>
            <LeftBody />
            <RightBody />
        </div>

    )
}

export default Body