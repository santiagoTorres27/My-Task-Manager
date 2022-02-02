import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/user/userContext'
import { useParams } from 'react-router-dom'
import AddTask from './AddTask'
import TaskListItems from './TaskListItems'
import Card from '../ui/Card'
import TaskDetail from './TaskDetail'
import NavbarItems from '../layout/NavbarItems'

const TaskList = () => {

    // Get params of the url
    const { category } = useParams()

    // Initialize user context
    const userContext = useContext(UserContext)

    // Spread items of the context
    const { taskList, getTaskCategory, getAllItems } = userContext

    // Initialize set openModal
    const [isOpened, setIsOpen] = useState(false)
    const [isOpenedTask, setOpenTask] = useState(false)

    // Use state
    const [oneTask, setOneTask] = useState()

    useEffect(() => {
        getAllItems()
        setLista(taskList)
    }, [isOpened])

    const [lista, setLista] = useState(taskList)

    const filterTaskByCategory = (categoria) => {
        setLista(taskList.filter((item) => item.category === categoria))
    }

    const filterTaskByCompleted = (completed) => {
        setLista(taskList.filter((item) => item.completed === completed))
    }

    const searchAll = () => {
        setLista(taskList)
    }

    const openModal = (open) => {
        setIsOpen(open)
    }

    const openModalTask = (open, id) => {
        setOpenTask(open)
        const myTask = taskList.filter((task) => task.id === id)
        setOneTask(myTask[0])
    }

    // Set style of the grid
    const [viewGrid, setViewGrid] = useState(false)
    const setView = () => {
        setViewGrid(!viewGrid)
    }

    // Sort by title
    const [sortTitleAscend, setSortTitleAscend] = useState(false)
    const sortByTitle = () => {
        setSortTitleAscend(!sortTitleAscend)
        if (sortTitleAscend) {
            setLista((taskList) => taskList.slice().sort(
                (a, b) => a.title > b.title ? 1 : -1
            ))
        } else {
            setLista((taskList) => taskList.slice().sort(
                (a, b) => a.title < b.title ? 1 : -1
            ))
        }
    }

    // Sort by date
    const [sortDateAscend, setSortDateAscend] = useState(false)
    const sortByDate = () => {
        setSortDateAscend(!sortDateAscend)
        if (sortDateAscend) {
            setLista((taskList) => taskList.slice().sort(
                (a, b) => a.date > b.date ? 1 : -1
            ))
        } else {
            setLista((taskList) => taskList.slice().sort(
                (a, b) => a.date < b.date ? 1 : -1
            ))
        }
    }

    return (
        <div className="task-container">
            <div className={`${isOpened ? 'backdrop' : ''}`} onClick={() => openModal(false)}></div>
            <div className={`${isOpenedTask ? 'backdrop' : ''}`} onClick={() => openModalTask(false)}></div>

            {isOpened && <AddTask openModal={openModal}></AddTask>}
            {isOpenedTask && <TaskDetail oneTask={oneTask}></TaskDetail>}

            <div className='sidebar'>
                <button className='btn btn-secondary btn-lg' onClick={() => openModal(true)}>
                    Add new task
                </button>

                <ul>
                    <li onClick={() => searchAll()}>
                        <i className="fas fa-list"></i>All Tasks
                    </li>

                    <li onClick={() => filterTaskByCategory("school")}>
                        <i className="fas fa-graduation-cap"></i>School
                    </li>

                    <li onClick={() => filterTaskByCategory("home")}>
                        <i className="fas fa-home"></i>Home
                    </li>

                    <li onClick={() => filterTaskByCategory("health")}>
                        <i className="fas fa-notes-medical"></i>Health
                    </li>

                    <li onClick={() => filterTaskByCategory("shopping")}>
                        <i className="fas fa-shopping-cart"></i>Shopping
                    </li>

                    <hr />

                    <li onClick={() => filterTaskByCompleted(true)}>
                        <i className="fas fa-check-square"></i>Completed
                    </li>

                    <li onClick={() => filterTaskByCompleted(false)}>
                        <i className="far fa-check-square"></i>Unfinished
                    </li>

                </ul>
            </div>

            <div className="main">
                <NavbarItems setView={setView} viewGrid={viewGrid} sortByTitle={sortByTitle} sortByDate={sortByDate}></NavbarItems>
                <TaskListItems taskList={lista} openModalTask={openModalTask} viewGrid={viewGrid}></TaskListItems>
            </div>

        </div>
    )
}

export default TaskList
