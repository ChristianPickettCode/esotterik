import React from 'react'
import Hi from './hi'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Landing = (props) => {
    const codeString = `
    <Bridge request={{
      data: ["email", "name"],
      appName: "apple",
      appID: "123"
      }}>
      <App />
    </Bridge>`

    return (
        props.user ? 
        <Hi {...props}/>
        : 
        <div>
            <button style={{
                border: "none",
                backgroundColor:"white",
                color: "rgb(30, 30, 30)",
                padding: "10px",
                borderRadius:"5px",
                width:"70px",
                cursor:"pointer",
                position:"absolute",
                top:"10px",
                right:"10px",
                fontSize:"14px",
                fontWeight:"bold"
                }} onClick={() => props.login()}>App</button> 
            
            <div style={{ display: "flex", flexDirection:"row"}}>
                <div style={{width:"40%", marginRight:"5%", marginLeft:"5%"}}>
                <p>simple authentication react framework.</p>
                </div>
                <div style={{width:"50%", border:"5px solid white", borderRadius:"15px", marginRight:"2.5%"}}>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                    {codeString}
                </SyntaxHighlighter>
                </div>
            </div>
            </div>
    )
}

export default Landing
