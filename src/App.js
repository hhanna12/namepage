import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import Buttons from './Buttons'
import Datarow from './Datarow'
import namedb from './names'
import Search from './Search'
import Total from './Total'
import Titles from './Titles'


const App = () => {
    //unordered list of names
    const nameList = namedb.names
    //list of names that will be sorted
    const [ sortedList, setSortedList ] = useState(nameList)
    const [ searchedName, setSearchedName ] = useState('')
    const [ personObject, setPersonObject ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState(null)
  

    const toAmountOrder = () => {
        /* sorting list by amount. 
         * b.amount is the amount number. 
         * a.amount > b.amount returns boolean
         * then the sort function check if that's true or false and sorts the objects.
         */
         
        const sortedAmount = nameList.sort((a, b) => (
            a.amount < b.amount ? 1 : -1
        )) 
        setSortedList(sortedAmount)
        //rendering to show the sorted list in UI
        ReactDOM.render(
            <App />, document.getElementById('root')
        )
    }

    const toAlphabeticOrder = () => {
        // Sorting the list in alhabetic order
        const sortedNames = nameList.sort((a, b) => (
            a.name > b.name ? 1 : -1
        )) 
        setSortedList(sortedNames)
        ReactDOM.render( 
            <App />, document.getElementById('root') 
        )
    }
 
    const searchName = (event) => {
        /* Search the name and set the object as personObject. 
         * Set error message if name was not found.
         */
        event.preventDefault()
        const foundPerson = sortedList.find(p => p.name === searchedName)

        if(foundPerson){
            setPersonObject(foundPerson)
            setErrorMessage('')
        }
        else {
            setErrorMessage('Name not found')
            setPersonObject([])
        }
        return(errorMessage)
    }

    const changeHandler = (event) => {
        setSearchedName(event.target.value)
    }

    return (
        <div>
            <h1>People</h1>
            <div id='listArea'>
                <div id='total'>
                    <Total sortedList={sortedList}/>
                </div>
                <Buttons toAmountOrder={toAmountOrder} toAlphabeticOrder={toAlphabeticOrder}/>
                <Titles/>
                <ul>
                    {sortedList.map((person, index) => 
                        <Datarow person={person} key={index}/>
                    )}
                </ul>            
            </div>
            <div id='search'>
                <div id='info'>search person by name</div>
                <input onChange={changeHandler} placeholder='Write name'/>
                <Search searchName={searchName} />
                <div id='showSearch'>{personObject.name} {personObject.amount}</div>
                <div id='errorMessage'>{errorMessage}</div>
            </div>
        </div>
    )
}

export default App