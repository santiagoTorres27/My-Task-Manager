import React, { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'
import { ADD_USER, GET_CATEGORY_LIST, GET_ALL_ITEMS, COMPLETE_TASK, GET_TASK } from '../types'

const UserState = (props) => {

    const list = [
        {
            id: 't1',
            title: 'Basic react',
            description: 'Im learning React, this is my first project',
            date: '2018-12-12',
            category: 'home',
            completed: true
        }, {
            id: 't2',
            title: 'My Task 2',
            description: 'This is my first project',
            date: '2019-12-12',
            category: 'school',
            completed: false
        }, {
            id: 't3',
            title: 'Computing',
            description: 'My 3 ya',
            date: '2020-12-12',
            category: 'school',
            completed: true
        }, {
            id: 't4',
            title: 'I want to work',
            description: 'My 3 ya',
            date: '2021-12-12',
            category: 'health',
            completed: false
        }, {
            id: 't5',
            title: 'All i need is lobe',
            description: 'My 3 ya',
            date: '2022-12-12',
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
