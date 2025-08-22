import { useState } from "react"

export const MirrorInput =()=>{
    const [text, setText]=useState('');
    return (
        <>

        <div>
        MirrorInput Example: 
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/> 
            Mirror Output:{text}
        </div>
        </>
    );
}