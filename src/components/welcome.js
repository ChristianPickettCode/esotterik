import React, { useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Welcome = (props) => {
    const [active, setActive] = useState(false);
    // const [name, setName] = useState("");
    const [param, setParam] = useState()
    const [ws, setWs] = useState();
    // const [id, setId] = useState();

    const fullSend = (e) => {
        // setName(e);
        // console.log(param);
        ws.send(JSON.stringify({
            message: "send",
            to: param,
            data: e,
            action: "message"
        }));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // fullSend();
        }
    }

    useEffect(() => {
        setParam(props.match.params.id);
        const ws = new W3CWebSocket(`wss://u9j9kermu5.execute-api.us-east-1.amazonaws.com/dev`);
        setWs(ws);
        ws.onopen = () =>  {
            // console.log("connected.");
            ws.send(JSON.stringify({
                message: "connect",
                action: "message"
            }));
        };

        ws.onclose = () => {
            // console.log("disconnected.");
        };

        ws.onmessage = (msg) =>  {
            if (msg.type === "message") {
                const data = JSON.parse(msg.data);
                if (data.status === "connect") {
                    // console.log(data.id);
                    // setId(data.id);
                }
                if (data.status === "send") {
                    // console.log("SEND: ", data);
                }
            }
        };
    }, [props.match.params.id]);

    return (
        <>
            {active ? 
                <div>
                    <h2 style={{margin:"0", marginBottom:"5%"}}>what's your name?</h2>
                </div> : ""}
            
            <div>
                <input 
                    onClick={() => setActive(true)}
                    placeholder="tap here"
                    type="text" 
                    style={{ 
                        border:"none", 
                        backgroundColor:"transparent", 
                        color:"white", 
                        padding:"10px",
                        fontSize:"16px",
                        marginRight:"15px",
                        outline:"none"
                    }}
                    onChange={(e) => fullSend(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {/* <button
                    // onClick={fullSend} 
                    style={{
                        border:"none",
                        padding:"16px",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        color:"#282c34"
                    }}>ok</button> */}
            </div>
        </>
    )
}

export default Welcome
