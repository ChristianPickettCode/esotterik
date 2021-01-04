import React from 'react'

const hi = (props) => {

    const LogOut = () => {
        return(
            <button 
                onClick={props.logout}
                style={{
                position:"absolute", 
                top:"10px", 
                right:"10px", 
                border:"none",
                cursor:"pointer",
                padding:"10px",
                backgroundColor:"white",
                borderRadius:"5px",
                color:"rgb(30, 30, 30)",
                fontSize:"14px",
                fontWeight:"bold"
                }}>Log out</button>
        )
    }

    return (
        <div style={{textAlign:"left", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <LogOut />
            <div style={{width:"60%", margin:"auto", textAlign:"left"}}>
                <h2>AppName : {props.request.appName}</h2>
                <p>Name : {props.user.name}</p>
                <p>Email: {props.user.email}</p>
                <p>ID : {props.user.userAppID}</p>

                <p>My other projects : <a style={{textDecoration:"underline"}} href="https://atlis.dev" target="blank">atlis.dev</a>  &  <a style={{textDecoration:"underline"}} href="https://theclassroom.io" target="blank">theClassroom.io</a></p>
            </div>
        </div>
    )
}

export default hi
