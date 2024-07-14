import useWebSocket from "react-use-websocket";

interface WSBtnProps {}

export const WSBtn = ({}: WSBtnProps) => {

  // ! Connect to the *WS* server

    const WS = useWebSocket("wss://networth.shodon.ru/ws", {
      onMessage: message => console.log('Message ->', message),
      onOpen: data => console.log('Connected', data),
      onError: (err) => console.error("Connection is broke ->", err),
      share: true, // Allow to use anywhere in our app
    });
  
    // * Send a message to the *WS* server
    const SendWSMsg = () => {
      WS.sendJsonMessage({msg: "Holla!", id: 2312});
    }; 
  


	return (
		<button onClick={() => SendWSMsg()}>
			Send to the WS a message
		</button>
	);
};