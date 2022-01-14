import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";


export default function Home() {
  const {isAuthenticated , logout} =  useMoralis();
  if(!isAuthenticated){
    return(<Login/>)
  }
  return (
 <div className="h-screen overflow-y-scroll bg-gradient-to-b from-blue-400 to-white overflow-hidden"> 
   <div className=" max-w-screen-xl mx-auto">
   <Header/>
   <Messages/>
    </div>
  </div>
  )
}
