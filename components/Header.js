import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import Changeusername from "./Changeusername";

function Header() {
    const {user} = useMoralis();
    return (
        <div className=" sticky top-0 z-50 flex 
        flex-col space-y-2 p-3  items-center
         mx-auto text-white border-blue-400
        font-bold border-2  shadow-xl h-fit bg-slate-600">
            <div className="border-2 hover:opacity-50 cursor-pointer
            rounded-full border-indigo-700  "><Avatar logoutOnpress/></div>
            <h1>Welcome to METAVERSE</h1>
            <h2 className="truncate">{`Hi ${user.getUsername()}`}</h2>
            <Changeusername/>
        </div>
    )
}

export default Header
