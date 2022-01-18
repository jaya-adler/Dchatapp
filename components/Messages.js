import React ,{useState} from 'react'
import Sendmessage from './Sendmessage'
import { useRef } from 'react';
import { useMoralisQuery } from 'react-moralis';
import Usermsg from './Usermsg';
import {useMoralis} from 'react-moralis'
import Fileview from './Fileview';


const DurationData = 15;

function Messages() {
    const { user,Moralis} = useMoralis();
    const [fileinp, setfileinp] = useState("");
    const matchexp ='Filetype';
    // const [fileupload, setfileupload] = useState('');
    const endofMessages = useRef(null);
     const uploadfile = async ()  =>{
        const data = fileinp;
        const file = new Moralis.File(data.name, data);
        await file.saveIPFS();
        const getfile = file.ipfs();
        // const getfilehash = file.hash();
        if(!getfile) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages.save({
            message:matchexp+getfile,
            username:user.getUsername(),
            ethAddress:user.get('ethAddress'),
        }).then((message) =>{

        },
        (error) => {
            console.log(error);
        });
        endofMessages.current.scrollIntoView({behavior:"smooth"});
        

    }
    const {data,isLoading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'),
        [],{
            live:true,
        }
    );
    // console.log(data);
    // console.log(new Date(Date.now() - DurationData * 60 * 1000));
    return (
        <div className='block px-52'>
            <div className='flex flex-col'>
                {data.map((message) => {
                    // console.log(message.get('message').match(matchexp)===null)
                    if(message.get('message').match(matchexp)===null) {return (<Usermsg key={message.id} message={message}/>)}
                    else{ return (<Fileview key={message.id} message={message} filelink={message.get('message').replace(matchexp,'')}/>)}
                })}
            </div>
            <div ref={endofMessages} className='text-center pb-52 font-bold'>
                <p className='text-green-800'>end of messages</p>
            </div>
            <div className='flex items-center fixed'>
                <Sendmessage endofMessages={endofMessages}/>
                <div className='flex flex-col items-center font-sm right-6
                        fixed bottom-32  border-4  rounded-lg mx-8
                        border-blue-300   hover:shadow-2xl bg-slate-600'>
                    <button className='w-fit text-white 
                    hover:opacity-50 font-bold' onClick={uploadfile}>Send File</button>
                    <input className='w-fit  mx-auto' onChange={(e)=>setfileinp(e.target.files[0])} type='file' placeholder=''/>
                </div>
            </div>

        </div>
    )
}

export default Messages
