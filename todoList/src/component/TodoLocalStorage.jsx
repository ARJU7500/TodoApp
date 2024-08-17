const todoKey="reactTodo";
export const toGetLocalStorage=()=>
    {
        const rawTodos=localStorage.getItem(todoKey);
        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
    }
export const toSetLocalStorage=(task)=>
    {
       return  localStorage.setItem(todoKey,JSON.stringify(task));

    }