import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export const TaskContextProvider = props => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    const createTask = (taskTitle, taskDescription) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: taskTitle,
                description: taskDescription
            }
        ])
    }

    const deleteTask = taskId => {
        console.log(tasks)
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
