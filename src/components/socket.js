import { w3cwebsocket as W3CWebSocket } from "websocket";

export class WSServer {
    constructor() {
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
            console.log(msg);
            if (msg.type === "message") {
                const data = JSON.parse(msg.data);
                if (data.status === "connect") {
                    this.id = data.id;
                }
            }
        };
    }
}

export class WSClient {
    
    constructor() {
        return (async () => {
            ws = new W3CWebSocket(`wss://u9j9kermu5.execute-api.us-east-1.amazonaws.com/dev`);

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
                console.log(msg);
                if (msg.type === "message") {
                    const data = JSON.parse(msg.data);
                    if (data.status === "connect") {
                        this.currentID = data.id;
                        return {}
                    }
                }
            };
        })
        
    }
}

