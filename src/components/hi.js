import React from 'react'

const hi = (props) => {
    console.log(props);
    return (
        <div>
            <button 
                onClick={props.logout}
                style={{
                position:"absolute", 
                top:"10px", 
                right:"10px", 
                border:"none",
                backgroundColor:"transparent",
                cursor:"pointer",
                padding:"10px",
                backgroundColor:"white",
                borderRadius:"5px",
                color:"#282c34",
                }}>Log out</button>
            <h2>{props.request.appName}</h2>
            <p>hi.</p>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <p>{props.user.id}</p>
        </div>
    )
}

export default hi