import React, {useContext, useState, useEffect} from "react";
import {TaskListContext} from "../context/TaskListContext";

const TaskForm = () => {

    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle("");
        } else{
            editTask(title, editItem.id)
        }

    }

    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title);
            console.log(editItem);
        }else{
            setTitle('');
        }
    }, [editItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                value={title}
                className="task-input"
                placeholder="add task..."
                required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit task': 'Add task'}
                </button>
                <button
                    className="btn clear-btn"
                    onClick={clearList}
                >
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm;