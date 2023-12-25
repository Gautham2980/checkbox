import React ,{useState}from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Updatetask";

import{useSelector,useDispatch} from 'react-redux';
import { setselectedTask,removeTaskFromList,check } from "./Taskslice";
// import {selectedCut} from './Taskslice'

const Tasklist=()=>{

  const{taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  //const dispatch=removeTaskFromList()
  // const[check,setCheck]=useState(true)

    const updateTask=(task)=>{
        console.log("update task")
         setModalShow(true)
         dispatch(setselectedTask(task))
         console.log(task)
    }

    const deleteTask=(task)=>{
         console.log("delete task")
         dispatch(removeTaskFromList(task))
       
    }
    const [modalShow, setModalShow] = useState(false);
//     const [name,setName]= useState("")
//  const [description,SetDescrip]=useState("")

const checkbox=(i)=>{
  let a=taskList&&taskList.map((task,index)=>{
    console.log("hello i am check");
    return task.id===i?  task.check?{...task,check:false}:{...task,check:true}:task
  })
  console.log(a);
  dispatch(check(a))
}


    return(
        <div>


<Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
          <th>Cut</th>
          <th>Product Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          taskList && taskList.map((task,index)=>{
              return( 
              <tr key={task.id}>
                <td>{index+1}</td>
               {
                !task.check?(<>
            <td><input type="checkbox" onClick={()=>checkbox(task.id)} /></td>
                <td>{task.description}</td>
                
                </>)
                
                :(<>
               <td> <input type="checkbox" onClick={()=>checkbox(task.id)} /></td>
                <td><del>{task.description}</del></td>
                
                </>)
               }
                
                <td> 
                <Button variant="danger" className="mx-3"
                
                onClick={()=>updateTask(task)}>
                  <i className="bi bi-pencil-square"></i>
                 </Button>
      
      
                <Button variant="danger"
                onClick={()=>deleteTask(task)}
                >
                  <i class="bi bi-trash3-fill"></i>
                  </Button>
                </td>
              </tr>
             )
          })
        }
       
       
      </tbody>
    </Table>


    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}
export default Tasklist ;