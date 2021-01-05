import React from 'react'

const Search = ({ searchName }) => {
    return(
        <form onSubmit={searchName}>
            <div>
                <button type='submit'>Search</button>
            </div>
        </form>
    )
}

export default Search