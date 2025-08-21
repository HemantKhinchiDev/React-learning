import { useState } from "react"

export const MirrorInput =()=>{
    const [text, setText]=useState('');
    return (
        <>

        <div>
        MirrorInput Example: 
            <input type="text"/> 
            Mirror Output:{text}
        </div>
        </>
    );
}