import React, { useState, useEffect } from 'react'
import QRCode from "qrcode.react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import crypto from "crypto-js";

// Server
/*
    Open Websocket
        connect to url
    Generate QR Code

*/

const Index = ({request, response}) => {
    // const [toggle, setToggle] = useState(false);
    const [id, setId] = useState();
    // const [name, setName] = useState();
    // const [ok, setOk] = useState(false);
    // const [currentUser, setCurrentUser] = useState();
    const url = "https://www.esotterik.io"; 
    

    const [requestString, setRequestString] = useState()

    const parse = (encryptedData, ws) => {
        const parsedData = crypto.AES.decrypt(encryptedData, ws.id).toString(crypto.enc.Utf8)
        const d = JSON.parse(parsedData);
        localStorage.setItem("user", 
            JSON.stringify(d)
        )
        console.log(d);
        response(d);
    }

    const getUser = () => {
        let user = localStorage.getItem("user");
        if (user) {
            console.log(user);
            // setSendData({...sendData, id: JSON.parse(user).id});
            response(JSON.parse(user));
            return true;
        }
        return false;
    }

    useEffect(() => {
        console.log(request)
        const isUser = getUser();
        if (!isUser) {
            setRequestString(request.data.join("&"));
            const ws = new W3CWebSocket(`wss://u9j9kermu5.execute-api.us-east-1.amazonaws.com/dev`);
            ws.onopen = () =>  {
                console.log("connected.");
                ws.send(JSON.stringify({
                    message: "connect",
                    action: "message"
                }));
            };

            ws.onclose = () => {
                console.log("disconnected.");
            };

            ws.onmessage = (msg) =>  {
                if (msg.type === "message") {
                    const data = JSON.parse(msg.data);
                    if (data.status === "connect") {
                        setId(data.id);
                        ws.id = data.id;
                    }
                    if (data.status === "send") {
                        parse(data.data, ws);
                    }
                }
            };

            // return () => {
            //     ws.close();
            // }
        }

    }, []);

    return (
        <>
            {/* {ok ? 
                <p onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                    <a href="https://twitter.com/esotterik" target="blank">{toggle ? "❤️": "you are incredible."}</a>
                </p> 
            : ""} */}

            {id ? 
                <div style={{paddingLeft :"10px", paddingRight:"10px", paddingTop:"10px", paddingBottom:"5px", backgroundColor:"white", borderRadius:"5px", margin:"0"}}>
                    <QRCode fgColor="#282c34" value={`${url}/welcome/${id}/?${requestString}&appName=${request.appName}&appID=${request.appID}`}  onClick={() => console.log(id)}/>
                </div> : ""}

            {/* {name && !ok ? 
                <>
                    <p>how is your day {name}?</p>
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
                            }}><h3 style={{padding:"0", margin:"0"}}>awesome.</h3></button>
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
                            }}><h3 style={{padding:"0", margin:"0"}}>fantastic.</h3></button>
                    </div>
                    
                    
                </> : ""} */}
            
        </>
    )
}

export default Index
