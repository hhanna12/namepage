import React from 'react'

const Datarow = ({ person }) => {
    return (
        <div className='datarow'>
            <li>{person.name}</li>
            <li id='amount'>{person.amount}</li>
        </div>
    )
}

export default Datarow