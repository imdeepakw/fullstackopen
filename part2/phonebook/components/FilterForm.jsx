const FilterForm = (props) => {


    return (
        <div>
            filter: <input onChange={props.onChange} />
            <p>debug filters: {props.filters}</p>
        </div>
    )
}

export default FilterForm