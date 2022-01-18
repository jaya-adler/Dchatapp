import Image from 'next/image';
import React ,{useState} from 'react';
import axios from 'axios';
import { useMoralis } from 'react-moralis';
import TimeagoReact from 'timeago-react';


function Fileview({message,filelink}) {
    const {user} = useMoralis();
    var isimage='', boolimg=false;
    const isusermsg = message.get('ethAddress') === user.get('ethAddress');
   
    // axios.get(filelink).then(res =>{
    //          isimage= res.headers['content-type'];
    //         console.log(isimage);
    //         return isimage
    // }).then(imgtype =>{
    //     console.log(imgtype)
    //     if(imgtype.match('image')!==null){
    //         boolimg=  true;
    //         console.log(isimage,boolimg);
    //     }
    //     else{
    //         boolimg= false;
    //         console.log(isimage,boolimg);
    //     }
    // })

    return (
        <div className={`flex relative items-end 
        space-x-2  p-3 
        ${isusermsg && "justify-end"}`}>

        <div className={`rounded-full border-2 ml-2 ${isusermsg ? "order-last border-green-500 ":"border-blue-500"}`}>
            <Image 
             src={`https://avatars.dicebear.com/api/open-peeps/${message.get('username')}.svg`}
             width={20} height={20} 
            />
        </div>

        <div className={`flex items-center space-x-2 p-2 border-2 -ml-5 rounded-md font-bold w-fit
        ${isusermsg?"text-green-800 rounded-br-none border-green-300"
        :"text-blue-800 rounded-bl-none border-blue-300"}`}
        >  
            <Image className='rounded-md'
            src={filelink}
            width={300} height={150}/>
            <a className='relative' href={filelink} download="image.png" >➩</a>
        </div>
        
        <TimeagoReact className={`text-[10px] 
            text-gray-500 italic ${isusermsg && "order-first"}`} 
            datetime={message.createdAt} />
        
        
        <p className={`text-[10px]  absolute -bottom-2
        text-gray-500 italic ${isusermsg ? "text-green-700":"text-blue-700"}`} 
        >{message.get('username')}</p>
            

        </div>
        
    )
}

export default Fileview;
