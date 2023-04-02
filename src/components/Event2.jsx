function ActionButton({ onClick }) {
    return <button onClick={onClick}>Log Click-Event</button>
}


function EventCatcher() {

    const clickHandler = (event) => {
        console.log(event)
    }

    return <ActionButton onClick={ clickHandler } />
}


export default EventCatcher