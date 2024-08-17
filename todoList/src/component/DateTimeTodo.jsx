import { useState, useEffect } from "react";

const DateTimeTodo=()=>
{
    const [dateTime, setDateTime]=useState("");
    // todo date and time /////////////////////////////////
    useEffect(()=>{
        const interval =setInterval(()=>{
            const now= new Date();
            const dateFormat=now.toLocaleDateString();
            const timeFormat= now.toLocaleTimeString();
            setDateTime(`${dateFormat} - ${timeFormat}`)
        },1000);
        return ()=> clearInterval(interval);
    },[])
    return (
        <>
         <div className="mt-5 mb-5">
            <h2 className="text-blue-500">{dateTime}</h2>

        </div>
        </>
    )
}
export default DateTimeTodo;