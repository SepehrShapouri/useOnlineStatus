import { useEffect,useState } from "react";
import "./App.css"
const App = () => {
  const [isOnline,setIsOnline] = useState(true)
  useEffect(()=>{
    const handleOnline = ()=>{
      setIsOnline(true)
    }
    const handleOffline = ()=>{
      setIsOnline(false)
    }
    window.addEventListener('online',handleOnline)
    window.addEventListener('offline',handleOffline)
    return ()=>{
    window.removeEventListener('online',handleOnline)
    window.removeEventListener('offline',handleOffline)
    }
  },[])
  return ( 
    <h1 className={isOnline ? "online" : "offline"}>{isOnline?'Online' : 'Offline'}</h1>
   );
}
 
export default App;