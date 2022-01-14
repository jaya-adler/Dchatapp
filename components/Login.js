import Image from 'next/image';
import React from 'react';
import meta from '../public/meta.jpg'
import avatar from '../public/avatar.jpeg'
import { useMoralis } from 'react-moralis';


function Login() {
    const {authenticate} = useMoralis();
    return (
        <div className="text-lg">
            <div className='flex flex-col absolute h-4/6 
            z-10 justify-center items-center w-full space-y-4'>
                <Image className=' 
                rounded-full'
                src={avatar}
                height={100}
                width={100}/>

                <button  onClick={authenticate} className='bg-purple-400 text-white
                 rounded-2xl animate-pulse p-3 ' >Login to metaverse</button>
            </div>
            <div className='h-screen w-full'>
                <Image 
                src={meta} 
                layout='fill'
                objectFit='cover'/>
                {/* <image src="/home/adler/Documents/blockchain/chat/images/meta.jpg"></image> */}
            </div>
        </div>
    )
}

export default Login