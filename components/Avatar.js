import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({username,logoutOnpress}) {
     const {user, logout} =  useMoralis();

    return (
        <Image 
        src={`https://avatars.dicebear.com/api/croodles-neutral/${user.getUsername()}.svg`}
        width={100} height={100} 
        onClick={() => logoutOnpress && logout()}
        />
    )
}

export default Avatar
