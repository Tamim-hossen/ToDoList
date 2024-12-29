import {useState} from 'react'
import './toDoList.css'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [input,setInput] = useState();

function addTask(){
if(input.trim()!=""){
    setTasks([...tasks,input]);
}
setInput('');
}

function handleRemoveTask(index){
    setTasks(tasks.filter((_,i) => i!= index));
}
function moveTaskUp(index){
    if(index>0){
        let updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]] = 
        [updatedTask[index-1],updatedTask[index]];

        setTasks(updatedTask);
    }
    
}
function moveTaskDown(index){
    if(index<tasks.length-1){
        let updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]] = 
        [updatedTask[index+1],updatedTask[index]];

        setTasks(updatedTask);
    }
}
function editTask(index){
    let updatedTask = [...tasks];
    updatedTask[index] = window.prompt("Edit Task: ");
    if(updatedTask[index].trim()!=""){
        setTasks(updatedTask);
    }
    

}
return(
    <div className='container'>
        <div className='inputDisplay'>
            <input type='text' placeholder='Enter Task Here' id= "inputval"value={input}
            onChange = {(e)=> setInput(e.target.value) }></input><br/>
            <button onClick = {addTask} className="addbtn">Add Task</button>
        </div>
        
            <ul>
            {tasks.map((task, index) => (
                
                <div className="display" key={index} >
                            <li style={{ backgroundColor: index === 0 ? '#ff8c8cf0' : index===1 ? 'rgb(196, 160, 0)': index===2 ?'green': 'blue' }}>{task}</li>
                            <button className="removebtn" onClick={() => handleRemoveTask(index)}>Remove</button>
                            <button className="movebtn" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="movebtn" onClick={() => moveTaskDown(index)}>Down</button>
                            <button className="editbtn" onClick={() => editTask(index)}>Edit</button>
                            
                        </div>
              
                
            ))}
            </ul>
            
            
        

    </div>
)
}
export default ToDoList;