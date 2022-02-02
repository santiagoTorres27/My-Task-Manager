import React, { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { ADD_USER, GET_CATEGORY_LIST, GET_ALL_ITEMS, COMPLETE_TASK, GET_TASK } from '../types'

const UserState = (props) => {

    const list = [
        {
            id: 't1',
            title: 'Learn react',
            description: 'Watch youtube tutorials about React',
            date: '2022-02-02',
            category: 'school',
            completed: true
        }, {
            id: 't2',
            title: 'Complete JavaScript Project',
            description: 'Complete JS project about events and upload it to the school website ',
            date: '2022-02-10',
            category: 'school',
            completed: false
        }, {
            id: 't3',
            title: 'Finish PHP Project',
            description: 'Finish PHP Project and add styles with bootstrap',
            date: '2022-01-18',
            category: 'school',
            completed: true
        }, {
            id: 't4',
            title: 'Appointment with the doctor',
            description: 'Doctors appointment at 3 p.m.',
            date: '2022-03-02',
            category: 'health',
            completed: false
        }, {
            id: 't5',
            title: 'Go to the supermarket',
            description: 'Buy bread, fish and salad',
            date: '2022-02-04',
            category: 'shopping',
            completed: false
        }
    ]

    const initialState = {
        taskList: list,
        task: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // Get task
    const getTask = (taskId) => {
        const myTask = list.filter((item) => item.id === taskId)
        dispatch({
            type: GET_TASK,
            payload: myTask
        })
    }

    // Add task
    const addTask = (task) => {
        dispatch({
            type: ADD_USER,
            payload: task
        })
    }

    // Get category tasks
    const getTaskCategory = (category) => {
        dispatch({
            type: GET_CATEGORY_LIST,
            payload: category
        })
    }

    // Get all items
    const getAllItems = () => {
        dispatch({
            type: GET_ALL_ITEMS
        })
    }

    // Complete item
    const completeTask = (id, completed) => {
        dispatch({
            type: COMPLETE_TASK,
            payload: id,
            payload2: !completed
        })
    }

    return (
        <UserContext.Provider
            value={{
                taskList: state.taskList,
                addTask,
                getTaskCategory,
                getAllItems,
                completeTask,
                getTask,
                task: state.task
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
