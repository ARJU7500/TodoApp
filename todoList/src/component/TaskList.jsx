import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const TaskList=({key,data,onHandleDeleteTodo,onHeandelChek,currentStatus})=>
{
    return(
        <>
        <li key={key} className="mt-10 mb-10 flex items-center justify-center gap-[90px]">
                            <div>
                                <span className=" font-semibold text-xl " >{data}</span>
                                </div>
                            <div className="flex gap-10">
                            <span className="text-green-600 text-lg">
                                <FaCheck />
                                </span>
                            <span onClick={()=>onHandleDeleteTodo(data)} className="text-red-600 text-lg">
                                <AiFillDelete />
                                </span>
                            </div>
                        </li>
        </>
    )
}
export default TaskList;