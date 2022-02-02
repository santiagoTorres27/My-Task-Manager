import React, { useContext, useState } from 'react'
import UserContext from '../../context/user/userContext'

const TaskItem = ({ item, openModalTask }) => {

    const { id, title, description, date, category, completed } = item

    const userContext = useContext(UserContext)
    const { completeTask } = userContext

    const setCompleteTask = () => {
        completeTask(id, completed)
    }

    const contentClass = `${completed ? 'card-btn btn-secondary' : 'btn-secondary-outlined'}`

    return (
        <div className='card'>
            <div className='content' onClick={() => openModalTask(true, id)}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card-footer">
                    <small>{date}</small>
                    <button className={contentClass} onClick={setCompleteTask}>
                        <i className="fas fa-check"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem
