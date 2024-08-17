import { useState } from "react";
import InputTask from "./InputTask";
import TaskList from "./TaskList";
import DateTimeTodo from "./DateTimeTodo";
import AllDelete from "./AllDelete";
import HeadingTodo from "./HeadingTodo";
import { toGetLocalStorage, toSetLocalStorage } from "./TodoLocalStorage";
/////////////////////////////////////////////////////


const TodoList=()=>
{
    const [task, setTask]=useState(()=>toGetLocalStorage());
    ///////////////////////////////////////////////////////////6
    const handleFormSubmit=(inputValue)=>{
        // destructure 
        const {id,content,checked}=inputValue;
        // input field empty or not 
        if(!content) return;
        //check data is already exits or not 
        // if(task.includes(content)) return;
        const alreadyExits= task.find((curTask)=>curTask.content==content);
        if(alreadyExits) return;
        // update the data 
        setTask((preData)=>[...preData, {id, content, checked}]);
        }
        /////////////////////////////////////////////////////////////////
        // add data into local storage 
        toSetLocalStorage(task);
    // delete single task //////////////////////////////////////////////////
    const itemDlete=(taskValue)=>
    {
        const updateTask=task.filter((curTask)=>curTask.content!==taskValue);
        setTask(updateTask);
    }
     ////////////////////////////////////////////////////
     const allDelete=()=>{
        setTask([]);
    }
    ///////////////////////////////////////////////////////7
const taskDone=()=>
{
    console.log("done");
}
    ///////////////////
    return(
        <section className="border-2 border-blue-500 w-[600px] h-auto p-[10px] rounded-lg">
        {/* heading  */}
        <HeadingTodo />
        {/* time and date  */}
       <DateTimeTodo />
        {/* input task  */}
       <InputTask onAddTodo={handleFormSubmit} />
        {/* adding task  */}
        <div>
            <ul>
                {
                    task.map((currentTodo)=>{
                        return(
                            <TaskList key={currentTodo.id} data={currentTodo.content} onHandleDeleteTodo={itemDlete} onHeandelChek={taskDone} 
                            currentStatus={currentTodo.checked}/>
                        )
                    })
                }
            </ul>
        </div>
        {/* button for cleare task */}
        <AllDelete onHandleAllDelete={allDelete} />
        </section>
    )
}

export default TodoList;