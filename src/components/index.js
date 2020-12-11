import React, { useState, useEffect } from 'react'
import QRCode from "qrcode.react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Index = () => {
    const [toggle, setToggle] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [ok, setOk] = useState(false);
    const url = "https://www.esotterik.io";

    useEffect(() => {
        const ws = new W3CWebSocket(`wss://u9j9kermu5.execute-api.us-east-1.amazonaws.com/dev`);
        ws.onopen = () =>  {
            //console.log("connected.");
            ws.send(JSON.stringify({
                message: "connect",
                action: "message"
            }));
        };

        ws.onclose = () => {
            //console.log("disconnected.");
        };

        ws.onmessage = (msg) =>  {
            if (msg.type === "message") {
                const data = JSON.parse(msg.data);
                if (data.status === "connect") {
                    setId(data.id);
                }
                if (data.status === "send") {
                    setName(data.data);
                }
            }
        };
    }, []);

    return (
        <>
            {ok ? 
                <p onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                    <a href="https://twitter.com/esotterik">{toggle ? "ha.": "esotterik."}</a>
                </p> 
            : ""}
            

            {id && !name && !ok ? 
                <div style={{paddingLeft :"10px", paddingRight:"10px", paddingTop:"10px", paddingBottom:"5px", backgroundColor:"white", borderRadius:"5px", margin:"0"}}>
                    <QRCode fgColor="#282c34" value={`${url}/welcome/${id}`}  onClick={() => console.log(id)}/>
                </div> : ""}

            {name && !ok ? 
                <>
                    <p>you think you're cool {name}.</p>
                    <div>
                        <button 
                            onClick={() => setOk(true)}
                            style={{
                                border:"none",
                                backgroundColor:"transparent",
                                color:"white",
                                outline:"none",
                                textDecoration:"underline",
                                padding: "0",
                                cursor:"pointer",
                                marginRight:"10px"
                            }}><h3 style={{padding:"0", margin:"0"}}>ya.</h3></button>
                        <button 
                            onClick={() => setOk(true)}
                            style={{
                                border:"none",
                                backgroundColor:"transparent",
                                color:"white",
                                outline:"none",
                                textDecoration:"underline",
                                padding: "0",
                                cursor:"pointer"
                            }}><h3 style={{padding:"0", margin:"0"}}>nah.</h3></button>
                    </div>
                    
                    
                </> : ""}
            
        </>
    )
}

export default Index
