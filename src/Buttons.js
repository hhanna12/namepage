import React from 'react'

const Buttons = ({ toAmountOrder, toAlphabeticOrder }) => {
    return (
        <div>
            <button onClick={toAlphabeticOrder}>Sort by name</button>
            <button onClick={toAmountOrder}>Sort by amount</button>
        </div>
    )
}

export default Buttons