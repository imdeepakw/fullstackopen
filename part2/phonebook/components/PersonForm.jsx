const PersonForm = (props) => {
    return (
    <form onSubmit={props.formSubmit}>
        <div>
            name: <input value={props.newName} onChange={props.nameInput}/>
        </div>
        <div>
            phone: <input value={props.newNumber} onChange={props.phoneInput}/>
        </div>
        <div>debug: {props.newName}</div>
        <div>debug: {props.newNumber}</div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm