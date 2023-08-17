import React from "react"
import SideBar from "./SideBar"
import SongContainer from "./SongContainer"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import SignIn from "./SignIn"

let Body=()=>{
    return(
        <>
        <div><Header/></div>
        {/* i remove flex ffrom here */}
        <div className="flex "> 
        {/* <SideBar/> */}
        {/* <SongContainer/> */}
        <Outlet/>
        </div>
        </>
    )
}

export default Body