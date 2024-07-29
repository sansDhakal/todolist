import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({newTask, setNewTask, tasks, setTasks }) => {
    const onInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: newTask, completed: false}]);
        setNewTask("");
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input
            type='text' 
            placeholder='add a task' 
            className='inputTask' 
            value={newTask} 
            required 
            onChange={onInputChange}/>
        <br></br>
        <center>
            <button
                className='addButton' 
                type='submit'>➕
            </button>  
        </center>
        
    </form>
  )
}

export default Form