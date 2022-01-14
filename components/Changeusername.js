import React from 'react'
import { useMoralis } from 'react-moralis'

function Changeusername() {
    const {setUserData,user,isUserUpdating,userError}= useMoralis();
    const setusername = () => {
        const username = prompt('enter your new username?');
        if(!username) return;
        setUserData({
            username,
        })
    }
    return (
        <div>
            <button onClick={setusername}
            disabled={isUserUpdating}
            >(change username)</button>
        </div>
    )
}

export default Changeusername
