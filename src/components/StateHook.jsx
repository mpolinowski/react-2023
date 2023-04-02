import { useState, useReducer } from 'react'

const initialState = {count: 0}

function reducer(reducedState, action) {
    switch (action.type) {
        case 'increment':
            return { count: reducedState.count + 1 }
        case 'decrement':
            return { count: reducedState.count - 1 }
        default:
            throw new Error()
    }
}


// props are immutable to be able to modify
// state and redraw ui components use a state hook
function Stateful() {
    const [count, setCount] = useState(0)
    const [state, setState] = useState({ count: 0, goddess: 'Artemis'})

    const handleClick = () => {
        setState({
            ...state,
            count: state.count + 1,
        })
    }

    const [reducedState, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <p>Diana: { count }</p>
            <button onClick={ () => setCount(count +1)}>Like</button>
            <p>{ state.goddess }: { state.count }</p>
            <button onClick={ handleClick }>Like</button>
            <p>God in general: { reducedState.count }</p>
            <button onClick={ () => dispatch({type: 'increment'})}>Like</button>
            <button onClick={ () => dispatch({type: 'decrement'})}>Dislike</button>
        </>
    )
}

export default Stateful