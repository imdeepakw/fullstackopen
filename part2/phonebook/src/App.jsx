import { useState, useEffect} from 'react'
import FilterForm from '../components/FilterForm'
import PersonForm from '../components/PersonForm'
import Persons from '../components/Persons'
import Notification from '../components/Notification'
import FilterPerson from '../components/FilterPerson'
import phoneServices from '../services/phoneServices'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filters, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    phoneServices
      .getAllPersons()
      .then(result => {
        setPersons(result)
      })
  }, [])
  
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if(!personExists){
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      phoneServices
        .createPerson(personObject)
        .then(result => {
          setPersons(persons.concat(result))
          setNotification(`Added ${personObject.name}`)
          setTimeout(() => {
          setNotification(null)
        }, 5000)
        })
    }else if(window.confirm(`${personExists.name} is already added to phonebook, replace the old number with the new one?`)){
      const updatedUser = {
        ...personExists, 
        number: newNumber
      }
      phoneServices
        .updatePerson(personExists.id, updatedUser)
        .then(result => setPersons(persons.map(person => person.id === personExists.id ? result : person)))
        .catch(error => {
          setIsError(true)
          setNotification(`Information of ${personExists.name} has already been removed from server`)
          setTimeout(() => {
            setNotification(null)
          },5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handleDeletePerson = id => {
    const findPerson = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${findPerson.name}`)){
      phoneServices
        .deletePerson(id)
        .then(setPersons(persons.filter(person => person.id !== id)))
  }
}
  return (
    <div>
      <Notification message={notification} err={isError}/>
      <FilterForm onChange={handleFilterChange} filters={filters}/>
      <h2>Phonebook</h2>
     <PersonForm formSubmit={handleFormSubmit} nameInput={handleNameChange} phoneInput={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      {filters ?  <FilterPerson persons={persons} filters={filters} /> : <Persons personsList={persons} deletePerson={handleDeletePerson}/>}
    </div>
  )
}

export default App