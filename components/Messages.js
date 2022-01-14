import React from 'react'
import Sendmessage from './Sendmessage'
import { useRef } from 'react';
import { useMoralisQuery } from 'react-moralis';
import Usermsg from './Usermsg';


const DurationData = 15;

function Messages() {
    const endofMessages = useRef(null);
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
        <div className='block '>
            <div className='flex flex-col'>
                {data.map((message) => (
                    <Usermsg key={message.id} message={message}/>
                    ))}
            </div>
            <div className='flex flex-col items-center'>
                <Sendmessage endofMessages={endofMessages}/>
            </div>
            <div ref={endofMessages} className='text-center pb-52 font-bold'>
                <p className='text-green-800'>end of messages</p>
            </div>
        </div>
    )
}

export default Messages
