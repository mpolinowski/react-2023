function EventCatcher() {

    const clickHandler = (event) => {
        console.log(event)
    }

    return (
        <>
            <button onClick={clickHandler}>Log Click-Event</button>
        </>
    )
}

export default EventCatcher