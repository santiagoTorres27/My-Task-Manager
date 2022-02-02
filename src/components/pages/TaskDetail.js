import React, { useContext } from 'react'
import Card from '../ui/Card'
import UserContext from '../../context/user/userContext'
import classes from './TaskDetail.module.css'

const TaskDetail = ({ oneTask }) => {

    const { id, title, description, date, category, completed } = oneTask

    const userContext = useContext(UserContext)
    const { completeTask } = userContext

    const setCompleteTask = () => {
        completeTask(id, completed)
    }

    const contentClass = `${completed ? 'card-btn btn-secondary' : 'btn-secondary-outlined'}`

    return (
        <Card >
            <div className={classes['task-detail']}>
                <div className={classes.content}>
                    <div>
                        <h2>{title}</h2>
                        <p className={classes.desc}>{description}</p>

                        <div className={classes.footer}>
                            <div>
                                <p className={classes.info}><i className="far fa-calendar"></i>  {date}</p>
                                <p className={classes.info}><i class="fas fa-home"></i> {category}</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.buttons}>
                        <button className={contentClass} onClick={setCompleteTask}>
                            <i className="fas fa-check"></i>
                        </button>

                        <button className='btn-sort'>
                            <i class="far fa-edit"></i>
                        </button>

                        <button className='btn-sort'>
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default TaskDetail
