import React from "react";
import { useSelector } from "react-redux";

function Header(){
    const {taskList}=useSelector((state)=>state.tasks)
    // console.log(taskList);
    return(
        <div className="col">
            <h1 className="text-success">Task Management</h1>
            <p>Task-Details</p>
            <p>currently ${taskList.length} task pending </p>

        </div>
    )
}


export default Header