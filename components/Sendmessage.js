import React , {useState} from 'react';
import { useMoralis } from 'react-moralis';

function Sendmessage({endofMessages}) {
    const {user,Moralis}=useMoralis();
    const [message, setmessage] = useState("");
    const sendMessage = (e)=>{
        e.preventDefault();
        if(!message) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages.save({
            message:message,
            username:user.getUsername(),
            ethAddress:user.get('ethAddress'),
        }).then((message) =>{

        },
        (error) => {
            console.log(error);
        });
        endofMessages.current.scrollIntoView({behavior:"smooth"});
        setmessage("");
    }
    return (
        <form  className='flex  items-center max-w-screen-md px-6 py-4
        fixed bottom-12 w-11/12 left-8 border-4 p-3 rounded-full space-x-2
        border-blue-300 z-50  hover:shadow-2xl bg-slate-600'>
            <input onChange={(e)=>{setmessage(e.target.value)}}
            className=' outline-none bg-transparent
             flex-grow pr-2 text-white opacity-80 font-bold' 
            type='text'
            placeholder='enter your message'
            value={message}
            />
            <button onClick={sendMessage} className='font-bold 
            text-white hover:opacity-50'>Send</button>
        </form>
    )
}

export default Sendmessage
