import React from 'react'
import imgNotFound from '../../assets/img/404.png'

const NotFound = () => {
    return (
        <div className='container home'>
            <h1 className='light d-1 text-center'>Page not found</h1>
            <img src={imgNotFound} alt="Page Not Found" className='not-found-img' />
        </div>
    )
}

export default NotFound
