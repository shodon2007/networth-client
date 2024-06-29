import useWebSocket from "react-use-websocket";

const conn = useWebSocket('ws://localhost:8080', {
  onMessage: (message) => {
    console.log(JSON.parse(message.data));
  },
  share: true, // Allow to use anywhere in our app
})