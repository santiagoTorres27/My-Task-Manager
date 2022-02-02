import React, { useContext, useRef, useState } from 'react'
import UserContext from '../../context/user/userContext'
import { useNavigate } from 'react-router-dom'
import Card from '../ui/Card'

const AddTask = ({ openModal }) => {

    // Initialize user context 
    const userContext = useContext(UserContext)

    // Initialize navitation
    const navigate = useNavigate()

    // Category
    const categoryRef = useRef()

    // Title
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredTitleTouched, setEnteredTitleTouched] = useState(false)
    const enteredTitleIsValid = enteredTitle.trim() !== ''
    const titleInputIsInvalid = !enteredTitleIsValid && enteredTitleTouched

    const titleInputHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const titleInputBlurHandler = (event) => {
        setEnteredTitleTouched(true)
    }

    // Description
    const [enteredDescription, setEnteredDescription] = useState('')
    const [enteredDescTouched, setEnteredDescTouched] = useState(false)
    const enteredDescIsValid = enteredDescription.trim() !== ''
    const descInputIsInvalid = !enteredDescIsValid && enteredDescTouched

    const descriptionInputHanlder = (event) => {
        setEnteredDescription(event.target.value)
    }

    const descriptionInputBlurHandler = () => {
        setEnteredDescTouched(true)
    }

    // Date
    const dateRef = useRef()
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredDateTouched, setEnteredDateTouched] = useState(false)
    const enteredDateIsValid = enteredDate.trim() !== ''
    const dateInputIsInvalid = !enteredDateIsValid && enteredDateTouched

    const dateInputHandler = () => {
        setEnteredDate(dateRef.current.value)
    }

    const dateInputBlurHandler = () => {
        setEnteredDateTouched(true)
    }

    // Methods
    const onSubmit = (e) => {
        e.preventDefault()
        setEnteredTitleTouched(true)
        setEnteredDescTouched(true)
        setEnteredDateTouched(true)

        if (!enteredTitleIsValid || !enteredDescIsValid || !enteredDateIsValid) {
            return
        } else {
            const task = {
                id: Math.random(),
                title: enteredTitle,
                description: enteredDescription,
                date: enteredDate,
                category: categoryRef.current.value,
                completed: false
            }
            userContext.addTask(task)
            navigate('/task/list')
            openModal(false)
        }


        setEnteredTitleTouched(false)
        setEnteredDescTouched(false)
        setEnteredDateTouched(false)
    }

    const onCancel = () => {
        openModal(false)
    }

    return (
        <Card>
            <form className='form' onSubmit={onSubmit}>
                <h1 className='light text-center'>Add a new task!</h1>

                <div className="form-input">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        autoComplete="off"
                        onChange={titleInputHandler}
                        onBlur={titleInputBlurHandler} />
                    {titleInputIsInvalid && <small>Task's title is required</small>}
                </div>

                <div className="form-input">
                    <label htmlFor="description">Add a description</label>
                    <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        onChange={descriptionInputHanlder}
                        onBlur={descriptionInputBlurHandler} />
                    {descInputIsInvalid && <small>Task's description is required</small>}
                </div>

                <div className="grid-2">
                    <div className="form-input">
                        <label htmlFor="date">Put the date</label>
                        <input
                            type="datetime-local"
                            id="date"
                            autoComplete="off"
                            ref={dateRef}
                            onChange={dateInputHandler}
                            onBlur={dateInputBlurHandler} />
                        {dateInputIsInvalid && <small>Date's description is required</small>}
                    </div>

                    <div className="form-input">
                        <label htmlFor="category">Select the category</label>
                        <select name="select" ref={categoryRef}>
                            <option value="school">School</option>
                            <option value="home">Home</option>
                            <option value="health">Health</option>
                            <option value="shopping">Shopping</option>
                        </select>
                    </div>
                </div>

                <button
                    value="Cancel"
                    className='btn btn-danger principal f-l' onClick={onCancel} >Cancel</button>

                <input
                    type="submit"
                    value="Add new task"
                    className='btn btn-primary principal f-r' />
            </form>
        </Card >

    )
}

export default AddTask
