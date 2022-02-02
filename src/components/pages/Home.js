import React from 'react'
import homeImg from '../../assets/img/home-4.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const goTaskList = () => {
        navigate("/task/list")
    }

    return (
        <div className='container text-center home'>
            <h1 className='light d-1'>Welcome to this task manager!</h1>
            <button className='btn btn-primary principal' onClick={goTaskList}>Go to my task list</button>
            <img src={homeImg} alt="Welcome" className='banner-img' />
        </div>
    )
}

export default Home
