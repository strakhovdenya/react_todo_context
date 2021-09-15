import React, {useContext, useState} from "react";
import {TaskListContext} from "../context/TaskListContext";

const TaskForm = () => {

    const {addTask} = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }

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
                <button type="submit" className="btn add-task-btn">Add task</button>
                <button className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;