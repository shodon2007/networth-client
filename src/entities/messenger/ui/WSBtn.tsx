import useWebSocket from "react-use-websocket";

interface WSBtnProps {}

export const WSBtn = ({}: WSBtnProps) => {

  // ! Connect to the *WS* server
  const WS = useWebSocket("ws://localhost:8080", {
    onMessage: message => console.log(message.data),
    onError: (err) => console.error(err),
    onOpen: data => console.log(data),
    share: true, // Allow to use anywhere in our app
  });

  // * Send a message to the *WS* server
  const SendWSMsg = () => {
    WS.sendMessage('Holla!');
  };
  

	return (
		<button onClick={() => SendWSMsg()}>
			Send to the WS a message
		</button>
	);
};


/* 
* Below the work server for the code above :). 
const http = require('http')
const express = require('express')
const WebSocket = require('ws')
const { monitorEventLoopDelay } = require('perf_hooks')
const { log } = require('console')

const app = express()

const server = http.createServer(app)

const wsServer = new WebSocket.Server({ server })

wsServer.on('connection', ws => {
  console.log(ws)
  ws.on('message', m => {
    console.log(m.toString())
    wsServer.clients.forEach(client => client.send(m))
  })


  ws.on('error', err => ws.send(err))

  ws.send("Hi there! You're connected to a WebSocket server")
})

wsServer.on('close', user => {
  console.log(`User has been disconnected`)
  
})

server.listen(8080, () => {
  console.log('server listening on port', 8080)
  
})
*/
