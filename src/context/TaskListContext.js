import React, {createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        {
            title: 'Read Book', id: 1
        },
        {
            title: 'Wash car', id: 2
        },
        {
            title: 'Wash car again', id: 3
        },
    ]);

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuidv4()}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
