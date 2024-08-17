import { useState } from "react";

const InputTask=({onAddTodo})=>
{
    const [inputValue, setInputValue]=useState({});
    //////////////////////////////////
    const inputChange=(value)=>{
        setInputValue({id:value, content:value,checked:false});
    }
    //////////////////////////////////////////
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"", content:"",checked:false});
    }
    ///////////////////////////////////////////////
    return(
        <>
         <div className="flex mt-5 items-center justify-center gap-3">
            <form onSubmit={handleFormSubmit}>
                <input className="h-[44px] outline-none border-2 border-blue-500 placeholder:text-blue-500 p-[10px] rounded" type="text" name="taskName" onChange={(event)=>{inputChange(event.target.value)}} value={inputValue.content} autoComplete="off" placeholder="Enter your task name"/>
            </form>
            <div>
                <button type="submit" className="rounded outline-none border-blue-500 text-blue-500" onClick={handleFormSubmit}>Add Task</button>
            </div>
        </div>
        </>
    )
}
export default InputTask;