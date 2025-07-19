import { useEffect ,useState,useRef} from 'react'
import './App.css'

function App() {
  const inputRef = useRef();
  const [socket,setSocket] = useState();
 function sendMessage() {
  if(!socket) {
    return;
  }

  const message = inputRef.current.value;
  //@ts-ignore
  socket.send(message)
 }



 useEffect(()=> {
  fetch("http://localhost:3000/users")
  const ws = new WebSocket("ws://localhost:8080");

  setSocket(ws);
  ws.onerror = () => {

  }
  ws.onmessage = (ev) => {
    alert(ev.data);
  }
 },[]);

  return (
    <div>
        <input ref ={inputRef} placeholder='message' />
        <button onClick={sendMessage}>send</button>
      
    </div>
  )
}

export default App
