import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';
import TimeagoReact from 'timeago-react';


function Usermsg({message}) {
    const {user} = useMoralis();
    const isusermsg = message.get('ethAddress') === user.get('ethAddress');

    return (
        <div className={`flex relative items-end 
        space-x-2  p-3 
        ${isusermsg && "justify-end"}`}>
            <TimeagoReact className={`text-[10px] 
            text-gray-500 italic ${isusermsg && "order-first"}`} 
            datetime={message.createdAt} />
            <p className={`p-2 border-2 rounded-full font-bold
        ${isusermsg?"text-green-800 rounded-br-none border-green-300"
        :"text-blue-800 rounded-bl-none border-blue-300"}`}
        >{message.get('message')}</p>
            <div className='rounded-full border-2 border-blue-500'>
            <Image 
             src={`https://avatars.dicebear.com/api/croodles-neutral/${user.getUsername()}.svg`}
             width={20} height={20} 
            />
            </div>

        </div>
    )
}

export default Usermsg
