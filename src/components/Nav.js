import React from 'react'
import '../Styles/nav.css'

function Nav() {
    return (
            <ul className='d-flex justify-content-between py-3 px-2 m-0 bg-secondary' style={{width:'100vw'}} >
                <li className='ls-none text-light text-uppercase'>Company Name</li>
                <div className='d-flex justify-content-between px-4'>
                    <li className='ls-none px-2 text-light'><a style={{cursor: "pointer"}}>ThemeMode</a></li>
                    <li className='ls-none px-2 text-light'><a style={{cursor: "pointer"}}>UserInfo</a></li>
                    <li className='ls-none px-2 text-light'><a style={{cursor: "pointer"}}>Logout</a></li>
                </div>
            </ul>
    )
}

export default Nav