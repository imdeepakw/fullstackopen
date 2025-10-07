const Notification = ({message, err}) => {

    if(message === null){
        return (
            null
        )
    }

    if(err){
        return (
            <h1 className="errMsg">{message}</h1>
        )
    }
    return (
        <h1 className="msg">{message}</h1>
    )
}


export default Notification