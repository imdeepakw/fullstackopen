const FilterPerson = ({persons, filters}) => {
    let appliedFilter = persons.filter(person => person.name.toLowerCase().includes(filters.toLowerCase()))
    return (
        <div>
            {appliedFilter.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
        </div>
    )
}


export default FilterPerson