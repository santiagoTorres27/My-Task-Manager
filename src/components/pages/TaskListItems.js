import React from 'react'
import TaskItem from './TaskItem'
import NavbarItems from '../layout/NavbarItems'

const TaskListItems = ({ taskList, openModal, openModalTask, viewGrid }) => {

    const viewGridClass = viewGrid ? 'task-list' : 'task-list grid'

    return (
        <div className={viewGridClass}>
            {taskList.map(
                (item) => (
                    <TaskItem key={item.id} item={item} openModalTask={openModalTask} />
                )
            )}
        </div >
    )
}

export default TaskListItems
