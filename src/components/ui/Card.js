import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/user/userContext'

const Card = (props) => {

    return (
        <div className='modal'>
            {props.children}
        </div>
    )
}

export default Card
